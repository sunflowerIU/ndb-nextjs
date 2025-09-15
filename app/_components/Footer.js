import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "@/public/logo.png";

function Footer() {
  return (
    <footer
      id="contact"
      className="clip-slant-1 my-20 overflow-x-hidden bg-green-900 px-4 py-16 text-green-100 sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4 md:place-items-start md:gap-10">
        {/* Why Choose Us */}
        <div className="min-w-0">
          <h3 className="mb-4 text-xl font-semibold">Why Choose Us?</h3>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>
              <strong>Quality Guarantee:</strong> 100% best quality items
              available.
            </li>
            <li>
              <strong>Guaranteed Savings:</strong> Lowest prices without
              compromising quality.
            </li>
            <li>
              <strong>Daily Offers:</strong> Special deals and seasonal
              discounts.
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={logo}
            alt="Nepal Digital Bazar"
            width={80}
            height={80}
            quality={100}
            className="mb-4 h-20 w-20 rounded-full bg-green-100 p-2 shadow-lg"
          />
          <p className="text-sm">Nepal Digital Bazar</p>
        </div>

        {/* Social Media */}
        <div className="min-w-0">
          <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
          <div className="flex flex-wrap gap-4 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter/X"
              className="hover:text-primary transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-primary transition"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="hover:text-primary transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="min-w-0 break-all">
          <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 break-words">
              <FaEnvelope /> support@nepaldigitalbazar.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +977-9800000000
            </li>
            <li className="flex items-center gap-2">
              <FaMapLocationDot /> Kathmandu, Nepal
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-700 pt-6 text-center text-sm text-green-300">
        © {new Date().getFullYear()} Nepal Digital Bazar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
