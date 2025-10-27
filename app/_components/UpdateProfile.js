"use client";

import { saveProfile } from "@/_lib/action";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { toast } from "react-toastify";

function UpdateProfile({ data }) {
  async function handleSaveProfile(formData) {
    const response = await saveProfile(formData);
    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  }

  return (
    <form
      action={handleSaveProfile}
      className="flex w-full flex-col justify-center gap-6 rounded-xl bg-white p-6 shadow-sm"
    >
      {/* Profile Image */}
      <h1 className="text-primary mb-6 text-3xl font-bold">
        Hello, {data.fullName.toUpperCase()}
      </h1>
      <ProfileImage data={data} />

      {/* Full Name Input */}
      <div>
        <label className="text-text mb-1 block text-sm font-medium">
          Full Name
        </label>
        <input
          name="fullName"
          defaultValue={data.fullName}
          placeholder="Enter your full name"
          className="text-text w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none"
        />
      </div>

      {/* Save Button */}
      <Button type="secondary" className="w-full py-2 font-semibold">
        Save Profile
      </Button>
    </form>
  );
}

export default UpdateProfile;
