import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapLocationDot,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import SubmitButton from "../_components/SubmitButton";

export default function ContactPage() {
  return (
    <section className="bg-secondary min-h-screen px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary mb-10 text-center text-3xl font-bold">
          Contact Us
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="text-primary border-royal rounded-2xl border-1 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Get in Touch</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope />
                support@nepaldigitalbazar.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhone />
                +977-9800000000
              </li>
              <li className="flex items-center gap-3">
                <FaMapLocationDot />
                Kathmandu, Nepal
              </li>
            </ul>
            {/* Social Media */}
            <div className="mt-2 min-w-0">
              <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
              <div className="flex flex-wrap gap-4 text-2xl">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition hover:scale-y-75"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition hover:scale-y-75"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="Twitter/X"
                  className="transition hover:scale-y-75"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="transition hover:scale-y-75"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="transition hover:scale-y-75"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <p className="mt-6">
              We’ll get back to you within 24 hours on working days.
            </p>
          </div>

          {/* Contact Form */}
          <form
            action="/api/contact"
            method="POST"
            className="border-royal rounded-2xl border-1 p-6 shadow-lg"
          >
            <h2 className="text-primary mb-4 text-xl font-semibold">
              Send Us a Message
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="placeholder-text w-full rounded-md border border-green-700 px-3 py-2 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="placeholder-text w-full rounded-md border border-green-700 px-3 py-2 focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="placeholder-text w-full rounded-md border border-green-700 px-3 py-2 focus:outline-none"
              />

              <SubmitButton type="submit">Send Message</SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
