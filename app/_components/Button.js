function Button({ children, className = "", type = "primary", onClick }) {
  const base = ` cursor-pointer rounded-xl  px-5 py-2 font-semibold  shadow-md transition duration-200 hover:scale-105  focus:ring-2  focus:outline-none ${className}`;

  const style = {
    primary:
      base + ` bg-royal hover:bg-blue-600 focus:ring-blue-500 text-secondary`,
    secondary:
      base + `  hover:bg-green-800 bg-primary  text-sm font-medium text-white`,
  };

  return (
    <button onClick={onClick} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;

// <button className="mt-4 w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 ">
//             Add to Cart
//           </button>
