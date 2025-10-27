import { getUser, logoutUser } from "@/_lib/action";
import { auth } from "@/_lib/auth";
import { notFound } from "next/navigation";
import Logout from "../_components/Logout";
import UpdateProfile from "../_components/UpdateProfile";
import UpdatePassword from "../_components/UpdatePassword";

export default async function ProfilePage() {
  const session = await auth();
  if (!session) return notFound("user not loggedin");
  const { data, error } = await getUser(session?.user?.email);
  if (error || !data) return notFound("user data not found");
  return (
    <div className="bg-secondary mx-auto max-w-2xl rounded-lg p-6">
      <UpdateProfile data={data} />;{/* logout */}
      <UpdatePassword />
      <Logout onLogout={logoutUser} />
    </div>
  );
}
