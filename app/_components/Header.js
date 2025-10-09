import { auth } from "@/_lib/auth";
import Logo from "./Logo";
import Navigation from "./Navigation";

async function Header() {
  const session = await auth();
  // console.log(session);

  return (
    <header className="text-secondary bg-primary flex items-center justify-between px-4 py-2">
      <Logo />
      <Navigation session={session} />
    </header>
  );
}

export default Header;
