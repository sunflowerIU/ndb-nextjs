import Cart from "./_components/Cart";
import CartIcon from "./_components/CartIcon";
import Footer from "./_components/Footer";
import HomeProducts from "./_components/HomeProducts";
import Title from "./_components/Title";

export default function Home() {
  return (
    <div className="">
      <Title />
      <HomeProducts />
      <Footer />

      {/* Cart centered on screen */}
      <Cart />

      {/* Floating Cart Icon */}
      <div className="fixed right-6 bottom-6 z-50">
        <CartIcon />
      </div>
    </div>
  );
}
