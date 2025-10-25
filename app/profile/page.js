import { getUser, logoutUser } from "@/_lib/action";
import Image from "next/image";
import Button from "../_components/Button";
import { auth } from "@/_lib/auth";
import { toast } from "react-toastify";
import Logout from "../_components/Logout";
import logo from "@/public/logo.png";

export default async function ProfilePage() {
  const session = await auth();
  const { data, error } = await getUser(session?.user?.email);
  console.log(data);
  // console.log(session);

  return (
    <div className="bg-secondary mx-auto max-w-2xl rounded-lg p-6">
      {/* Change Profile Image and Name */}
      <form className="flex w-full flex-col justify-center gap-6 rounded-xl bg-white p-6 shadow-sm">
        {/* Profile Image */}
        <h1 className="text-primary mb-6 text-3xl font-bold">
          Hello, {data.fullName}
        </h1>
        <div className="flex flex-col items-center gap-3">
          <div className="relative h-32 w-32">
            <Image
              src={logo}
              alt="Profile"
              fill
              className="rounded-full border border-gray-300 object-cover"
            />
          </div>

          <label className="text-text cursor-pointer rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium transition hover:bg-gray-200">
            Change Photo
            <input
              type="file"
              accept="image/jpeg,image/png"
              className="hidden"
              // onChange={}
            />
          </label>
        </div>

        {/* Full Name Input */}
        <div>
          <label className="text-text mb-1 block text-sm font-medium">
            Full Name
          </label>
          <input
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

      {/* change password */}
      <form className="mt-6 flex w-full flex-col justify-center gap-6 rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-primary mb-6 text-3xl font-bold">
          Change Password
        </h1>
        <label
          htmlFor="currentPassword"
          className="text-text mb-1 block text-sm font-medium"
        >
          Current Password
        </label>
        <input
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
          placeholder="New password"
          className="text-text w-full rounded-md border px-3 py-2 focus:border-green-500 focus:outline-none"
        />
        <Button className="w-full">Update Password</Button>
      </form>

      {/* logout */}
      <Logout onLogout={logoutUser} />
    </div>
  );
}
