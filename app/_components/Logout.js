"use client";

import { toast } from "react-toastify";
import Button from "./Button";
import { useRouter } from "next/navigation";
function Logout({ onLogout }) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const result = await onLogout();
      console.log(result);
      if (result.success) {
        toast.success(result.message);
        // optionally redirect client-side too
        router.push("/login");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Unexpected error occurred!");
    }
  };
  return (
    <Button onClick={handleLogout} type="danger" className="mt-8 w-full">
      Log Out
    </Button>
  );
}

export default Logout;
