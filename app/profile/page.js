"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../_components/Button";
import { logoutUser } from "@/_lib/action";

export default function ProfilePage() {
  //   const [profilePic, setProfilePic] = useState("/default-avatar.png");
  const [name, setName] = useState("John Doe");
  const [password, setPassword] = useState("");
  //   const [preview, setPreview] = useState(null);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleSaveProfile = async () => {
    // Upload image + update name in DB here
    alert("Profile updated!");
  };

  const handlePasswordChange = async () => {
    if (!password) return alert("Enter a new password");
    // Call backend API route
    alert("Password updated!");
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">My Profile</h1>

      <div className="flex flex-col items-center gap-6">
        <div className="relative h-32 w-32">
          {/* <Image
            src={preview || profilePic}
            alt="Profile"
            fill
            className="rounded-full object-cover"
          /> */}
        </div>

        <label className="cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300">
          Change Photo
          <input
            type="file"
            className="hidden"
            onChange={handleProfileChange}
          />
        </label>
      </div>

      <div className="mt-8 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-gray-700 focus:border-green-500 focus:outline-none"
          />
        </div>

        <Button type="secondary" className="w-full">
          Save Profile
        </Button>

        <form className="mt-8 space-y-4">
          <label
            htmlFor="currentPassword"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Current Password
          </label>
          <input
            name="currentPassword"
            type="password"
            placeholder="current password"
            className="w-full rounded-md border px-3 py-2 text-gray-700 focus:border-green-500 focus:outline-none"
          />
          <label
            htmlFor="newPassword"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            name="newPassword"
            type="password"
            placeholder="New password"
            className="w-full rounded-md border px-3 py-2 text-gray-700 focus:border-green-500 focus:outline-none"
          />
          <Button className="w-full">Update Password</Button>
        </form>
      </div>

      <form action={logoutUser}>
        <Button type="danger" className="mt-8 w-full">
          Log Out
        </Button>
      </form>
    </div>
  );
}
