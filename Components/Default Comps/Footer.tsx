import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

interface FooterProps {}

const socialMediaItems = [
  { key: "facebook", icon: FaFacebook, href: "https://facebook.com/MediFlow" },
  { key: "twitter", icon: FaTwitter, href: "https://twitter.com/MediFlow" },
  {
    key: "instagram",
    icon: FaInstagram,
    href: "https://instagram.com/MediFlow",
  },
  { key: "linkedin", icon: FaLinkedin, href: "https://linkedin.com/MediFlow" },
  // Add more social media items as needed
];

const menuItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "pdfs", label: "doctor", href: "/doctor" },
  { key: "news", label: "doctoe", href: "/Doctor" },
  { key: "current-affairs", label: "doctor2", href: "/doctor2" },
  // Add more menu items as needed
];

function Footer({}: FooterProps) {
  return (
    <div>
      <div className=" mx-6">
        <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-justify text-gray-500 lg:text-left lg:text-lg ">
              MediFlow: Revolutionizing Healthcare Scheduling in India.
            </p>

            <div className="mt-6 flex justify-center gap-6 lg:justify-start">
              {socialMediaItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 "
                >
                  {<item.icon className="w-7 h-7" />}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>

              <ul className="mt-6 space-y-1">
                {menuItems.map((menuItem) => (
                  <li key={menuItem.key}>
                    <Link href={menuItem.href}>
                      <span className="text-gray-700 transition hover:text-gray-700/75">
                        {menuItem.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link href="/AboutUs">
                    <span className="text-gray-700 transition hover:text-gray-700/75">
                      About
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="/terms_conditions">
                    <span className="text-gray-700 transition hover:text-gray-700/75">
                      Terms & Conditions
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="/disclaimer">
                    <span className="text-gray-700 transition hover:text-gray-700/75">
                      Disclaimer
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="/privacypolicy">
                    <span className="text-gray-700 transition hover:text-gray-700/75">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link href="/faqs">
                    <span className="text-gray-700 transition hover:text-gray-700/75">
                      FAQs
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 text-center">
          <p className=" text-lg text-black">
            © <span className="font-[500]">MediFlow</span> 2023. All rights
            reserved.
          </p>
          <p>
            Designed & Developed by {""}
            <Link href="/DevTeam">
              <span className="text-blue-500">MediFlow Team</span>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
