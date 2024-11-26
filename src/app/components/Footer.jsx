import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="bg-[#0D1428] text-white py-10">
      <div className="container mx-auto gap-4 px-4 md:flex justify-between items-start">
        {/* Logo and Description */}
        <div className="grid md:grid-cols-5 grid-cols-2 gap-3">
          <div className="flex-1 col-span-2 md:col-span-1 mb-8 md:mb-0 text-[#788792]">
            <div className="mb-4">
              <img src="/logo-footer.svg" alt="WinproFX Logo" className="w-44" />
            </div>
            <p className="text-sm">
              Engage in trading with WinproFX – a single platform offering multiple opportunities.
            </p>
          </div>

          {/* Explore Section */}
          <div className="flex-1 mb-8 md:mb-0 text-[#788792]">
            <h3 className="font-medium text-lg mb-4 text-white">Explore</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Platform</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our IB</a></li>
              <li><a href="#" className="hover:underline">Free Funded Accounts</a></li>
              <li><a href="#" className="hover:underline">Education</a></li>
              <li><a href="#" className="hover:underline">News & Insights</a></li>
              <li><a href="#" className="hover:underline">Join Our Team</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>

          {/* Markets Section */}
          <div className="flex-1 mb-8 md:mb-0 text-[#788792]">
            <h3 className="font-medium text-lg mb-4 text-white">Markets</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Forex</a></li>
              <li><a href="#" className="hover:underline">Indices</a></li>
              <li><a href="#" className="hover:underline">Crypto</a></li>
              <li><a href="#" className="hover:underline">Metals</a></li>
              <li><a href="#" className="hover:underline">Commodities</a></li>
              <li><a href="#" className="hover:underline">Oil</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 mb-8 md:mb-0 text-[#788792]">
            <h3 className="font-medium text-lg mb-4 text-white">Contact Info</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center space-x-2">
                <FaWhatsapp size={18} />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center space-x-2">
                <CiMail size={18} />
                <a href="mailto:support@winprofx.com" className="hover:underline">support@winprofx.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <HiOutlinePhone size={16} />
                <a href="tel:+97144471894" className="hover:underline">+971 4 447 1894</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:opacity-80">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="hover:opacity-80">
                <CiLinkedin size={18} />
              </a>
              <a href="#" className="hover:opacity-80">
                <CiYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex-1 text-[#788792]">
            <h3 className="font-medium text-lg mb-4 text-white">Address</h3>
            <p className="text-sm">
              {/* <img src="/path-to-flag-icon.png" alt="Flag" className="inline w-4 mr-2" /> */}
              Registered Address:
            </p>
            <p className="text-sm">
              1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet, SAINT Lucia P.O Box 838, Castries, Saint Lucia.
            </p>
            <p className="text-sm mt-2">
              Registration Number: <strong>2023-00197</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
