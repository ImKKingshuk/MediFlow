"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

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
  { key: "pdfs", label: "Pdfs", href: "/pdfs" },
  { key: "news", label: "News/Blogs", href: "/News" },
  { key: "current-affairs", label: "Current Affairs", href: "/Currentaffairs" },
  // Add more menu items as needed
];

function Footer({}: FooterProps) {
  return (
    <div>
      <div className="bg-pure-greys-5 mx-auto pt-[6rem] md:pt-[8rem]">
        <div className="mx-auto  ">
          <strong className="block text-center text-lg font-bold text-gray-900 sm:text-3xl ">
            सारे Updates पाने के लिए Subscribe करें
          </strong>
          <Link href="https://t.me/UnchiudaanTeam">
            <a className="mt-6 flex w-fit hover:bg-blue-500 px-3 py-1 justify-between space-x-3 text-lg mx-auto rounded-full bg-blue-300 text-white">
              <FaTelegramPlane className="w-7 h-7" />
              <span>Subscribe</span>
            </a>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32 mx-[10%]">
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
                >
                  {<item.icon className="text-blue-500 w-7 h-7" />}
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
                      <a className="text-gray-700 transition hover:text-gray-700/75">
                        {menuItem.label}
                      </a>
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
                    <a className="text-gray-700 transition hover:text-gray-700/75">
                      About
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/terms_conditions">
                    <a className="text-gray-700 transition hover:text-gray-700/75">
                      Terms & Conditions
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/disclaimer">
                    <a className="text-gray-700 transition hover:text-gray-700/75">
                      Disclaimer
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/privacypolicy">
                    <a className="text-gray-700 transition hover:text-gray-700/75">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link href="/faqs">
                    <a className="text-gray-700 transition hover:text-gray-700/75">
                      FAQs
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 text-center">
          <p className=" text-lg text-black">
            © <span className="font-[500]">ऊँची उड़ान</span> 2023. All rights
            reserved.
          </p>
          <p>
            Designed & Developed by {""}
            <Link href="/DevTeam">
              <a className="text-blue-500">Meow Coders</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
