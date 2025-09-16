import { Raleway } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";

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
    <html className={`bg-secondary`} lang="en">
      <body>
        <Header />
        <div className="relative h-[500px] w-full">{children}</div>
      </body>
    </html>
  );
}
