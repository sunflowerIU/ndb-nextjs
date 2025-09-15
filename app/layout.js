import { Raleway } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import Footer from "./_components/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html className={`${raleway.className}`} lang="en">
      <body>
        <Header />
        <div className="relative h-[500px] w-full">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
