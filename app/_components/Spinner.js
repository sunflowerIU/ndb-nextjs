function Spinner() {
  return (
    <div className="z-50 -mt-20 flex h-screen items-center justify-center">
      {/* Spinner */}
      <div className="border-primary h-16 w-16 animate-spin rounded-full border-4 border-t-transparent"></div>
    </div>
  );
}

export default Spinner;
