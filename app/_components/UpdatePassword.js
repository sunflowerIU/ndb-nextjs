"use client";

import { toast } from "react-toastify";
import Button from "./Button";
import { updatePassword } from "@/_lib/action";

function UpdatePassword() {
  async function handleUpdatePassword(formData) {
    const currentPassword = formData.get("currentPassword");
    const newPassword = formData.get("newPassword");
    if (!currentPassword || !newPassword) {
      return;
    }
    if (currentPassword === newPassword) {
      toast.error("New password must be different from current password");
      return;
    }
    const response = await updatePassword(formData);
    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
    console.log({ currentPassword, newPassword });
  }
  return (
    <form
      action={handleUpdatePassword}
      className="mt-6 flex w-full flex-col justify-center gap-6 rounded-xl bg-white p-6 shadow-sm"
    >
      <h1 className="text-primary mb-6 text-3xl font-bold">Change Password</h1>
      <label
        htmlFor="currentPassword"
        className="text-text mb-1 block text-sm font-medium"
      >
        Current Password
      </label>
      <input
        minLength={8}
        name="currentPassword"
        type="password"
        placeholder="current password"
        className="text-text w-full rounded-md border px-3 py-2 focus:border-green-500 focus:outline-none"
      />
      <label
        htmlFor="newPassword"
        className="text-text mb-1 block text-sm font-medium"
      >
        New Password
      </label>
      <input
        name="newPassword"
        type="password"
        minLength={8}
        placeholder="New password"
        className="text-text w-full rounded-md border px-3 py-2 focus:border-green-500 focus:outline-none"
      />
      <Button className="w-full">Update Password</Button>
    </form>
  );
}

export default UpdatePassword;
