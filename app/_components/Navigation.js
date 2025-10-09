"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import NavigationItem from "./NavigationItem";

function Navigation({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((state) => !state);
  }
  return (
    // desktop nav
    <div>
      <nav>
        <ul className="hidden gap-6 text-lg sm:flex">
          <NavigationItem session={session} setIsOpen={setIsOpen} />
        </ul>

        {/* click button */}
        <button
          onClick={handleClick}
          className="nav-item cursor-pointer sm:hidden"
        >
          <Bars3Icon className="h-10 w-10" />
        </button>

        {/* mobile nav */}
        {isOpen && (
          <div className="bg-primary animate-fadeIn fixed inset-0 z-40 flex flex-col items-center justify-center space-y-10 text-2xl font-semibold sm:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 rounded-md p-2 transition hover:bg-white/20"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <NavigationItem session={session} setIsOpen={setIsOpen} />
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
