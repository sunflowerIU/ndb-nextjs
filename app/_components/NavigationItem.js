import Link from "next/link";
import Button from "./Button";
import { FaUser } from "react-icons/fa6";

function NavigationItem({ setIsOpen, session }) {
  return (
    <>
      <Link
        href="/all-products/thermos"
        onClick={() => setIsOpen(false)}
        className="nav-item transition"
      >
        Products
      </Link>
      <Link
        href="/about"
        onClick={() => setIsOpen(false)}
        className="nav-item transition"
      >
        About
      </Link>

      <Link
        href="/contact"
        onClick={() => setIsOpen(false)}
        className="nav-item transition"
      >
        Contact
      </Link>
      {!session ? (
        <Link href="/api/auth/signin" onClick={() => setIsOpen(false)}>
          <Button type="primary">Login</Button>
        </Link>
      ) : (
        <Link
          href="/profile"
          className="flex items-center justify-between gap-2"
          onClick={() => setIsOpen(false)}
        >
          <FaUser className="" />
          <span>Profile</span>
        </Link>
      )}
    </>
  );
}

export default NavigationItem;
