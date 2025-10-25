import { Raleway } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import Cart from "./_components/Cart";
import CartIcon from "./_components/CartIcon";
import Notify from "./Notify";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Nepal Digital Bazar",
    default: "Nepal Digital Bazar",
  },
  description:
    "Nepal Digital Bazar. Buy thermos, water bottles and many other different kitchen utilities.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-secondary">
      <body className={raleway.className}>
        <Notify />
        <Header />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
