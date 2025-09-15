import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex text-secondary items-center justify-between bg-primary px-4 py-2">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
