import { Inter } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import Notify from "./Notify";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={inter.className}>
        <Notify />
        <Header />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
