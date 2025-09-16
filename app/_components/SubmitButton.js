function SubmitButton({ children }) {
  return (
    <button className="bg-primary text-text cursor-pointer rounded-xl px-5 py-2 text-sm font-medium shadow-md transition duration-200 hover:scale-105 hover:bg-green-800 focus:ring-2 focus:outline-none">
      {children}
    </button>
  );
}

export default SubmitButton;
