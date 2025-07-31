import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-16 items-stretch">
        <div className="flex h-full items-center pr-10">
          <div className="flex items-center space-x-4">
            <img
              src="/footer.png"
              alt="Astral Neutraceuticals Logo"
              className="h-20 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-2xl font-extrabold text-blue-700">
                Astral Neutraceuticals
              </p>
              <p className="text-sm text-gray-500 mt-1 max-w-xs">
                Empowering Health Through Nature with innovative solutions for
                Livestock & Poultry care.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-3">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt className="text-blue-600" /> +92 306 7311786
          </p>

          <p className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-blue-600" /> astralnutra786@gmail.com
          </p>

          <p className="flex items-start gap-2 text-sm mb-3">
            {" "}
            <FaMapMarkerAlt className="text-blue-600 mt-1" /> Plot # 278
            industrial Estate phase ll, Multan
          </p>
          <div className="flex gap-4 text-2xl text-blue-600">
            <a
              href="https://www.facebook.com/sultan.saleem.7545/?locale=sr_RS&amp;paipv=0&amp;eav=AfaDMo3Jx74AZPylIieC8ZjVKgRTdhHaGBDt6HmfQJJ04NAgw0tEI5eWOk-_dVQ2RBs&amp;_rdr"
              className="hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/923067311786"
              className="hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right - Product Categories */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-3">
            Product Categories
          </h3>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>
              <Link
                href="/products/poultry"
                className="hover:text-blue-600 transition-colors hover:underline"
              >
                ✔ Poultry
              </Link>
            </li>
            <li>
              <Link
                href="/products/livestock"
                className="hover:text-blue-600 transition-colors hover:underline"
              >
                ✔ Livestock
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Astral Neutraceuticals. All rights
        reserved.
      </div>
    </footer>
  );
}
