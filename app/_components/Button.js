"use client";
import { useFormStatus } from "react-dom";

function Button({ children, className = "", type = "primary", onClick }) {
  const base = ` cursor-pointer rounded-xl  px-5 py-2 font-semibold  shadow-md transition duration-200 hover:scale-105  focus:ring-2  focus:outline-none ${className}`;

  const style = {
    primary:
      base + ` bg-royal hover:bg-blue-600 focus:ring-blue-500 text-secondary`,
    secondary:
      base + `  hover:bg-green-800 bg-primary  text-sm font-medium text-white`,

    danger:
      base + `  hover:bg-red-800 bg-red-600  text-sm font-medium text-white`,
  };
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} onClick={onClick} className={style[type]}>
      {pending ? <MiniSpinner /> : children}
    </button>
  );
}

export default Button;

function MiniSpinner() {
  return (
    <span className="z-50 flex items-center justify-center">
      {/* Spinner */}
      <div className="border-primary h-6 w-6 animate-spin rounded-full border-4 border-t-white"></div>
    </span>
  );
}

// <button className="mt-4 w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 ">
//             Add to Cart
//           </button>
