import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center justify-between space-x-2 ">
        <Image quality={100} width="60" height="60" src={logo} alt="logo" />
        <span className="  font-semibold capitalize md:text-xl">
          Nepal digital bazar
        </span>
      </div>
    </Link>
  );
}

export default Logo;
