"use client";

import { createUser, loginUser } from "@/_lib/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../_components/Button";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("amit@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [name, setName] = useState("");
  const router = useRouter();

  function setInitialState() {
    setEmail("");
    setPassword("");
    setName("");
  }

  async function handleForm() {
    if (isLogin) {
      const response = await loginUser({ email, password });
      // console.log(response);
      if (response) {
        toast.error(response.message);
        return;
      } else {
        toast.success("Logged in successfully", {
          delay: 500,
        });
        setInitialState();
        router.refresh();
      }
    } else {
      try {
        const response = await createUser({ email, password, name });
        // console.log(response);
        if (response.success === false) {
          toast.error(response.message);
          return;
        }
        toast.success("Account created successfully. Please login.");
        setInitialState();
        setIsLogin(true);
      } catch (error) {
        toast(error.message);
      }
    }
  }

  return (
    <div className="bg-primary/80 flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Tabs */}
        <div className="text-primary mb-6 flex justify-around">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 font-semibold ${
              isLogin ? "border-primary border-b-4" : "text-gray-800"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 font-semibold ${
              !isLogin ? "border-primary border-b-4" : "text-gray-800"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form action={handleForm} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <Button className="w-full">
            {isLogin ? "Login" : "Create Account"}
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="cursor-pointer text-blue-600 hover:underline"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="cursor-pointer text-blue-600 hover:underline"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
