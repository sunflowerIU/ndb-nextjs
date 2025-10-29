import Cart from "../../_components/Cart";
import CartIcon from "../../_components/CartIcon";

function layout({ children }) {
  return (
    <main className="relative">
      {/* Cart centered on screen */}
      <Cart />

      {/* Floating Cart Icon */}
      <div className="fixed right-6 bottom-6 z-50">
        <CartIcon />
      </div>

      {children}
    </main>
  );
}

export default layout;
