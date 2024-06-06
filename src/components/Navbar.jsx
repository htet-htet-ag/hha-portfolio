// import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/hha-logo.png";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { PiWhatsappLogoFill } from "react-icons/pi";

const Navbar = () => {
  const phoneNumber = "959797741227"; // Replace with your WhatsApp number in international format
  const preFilledMessage = encodeURIComponent(
    "Hello, I would like to contact you."
  );
  return (
    <nav className="mb-200 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" style={{ width: 80, height: 80 }} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/htet-htet-aung-8b33b3120/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/htet-htet-ag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://m.facebook.com/htet2.ag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/roffyjoy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href={`https://wa.me/${phoneNumber}?text=${preFilledMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiWhatsappLogoFill />
        </a>

        {/* <FaSquareXTwitter /> */}
      </div>
    </nav>
  );
};

export default Navbar;
