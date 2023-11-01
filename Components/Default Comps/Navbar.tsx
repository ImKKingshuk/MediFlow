import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

interface NavbarProps {}

function Navbar(): NavbarProps {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full fixed 0 z-40">
      <div className="backdrop-blur mx-auto">
        <ul className="flex justify-between text-black text-md p-4">
          <li className="flex items-center">
            <Link href="/">
              <span className="py-2 px-4">Home</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/services">
              <span className="py-2 px-4">Services</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/departments">
              <span className="py-2 px-4">Departments</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/about">
              <span className="py-2 px-4">About</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/contact">
              <span className="py-2 px-4">Contact</span>
            </Link>
          </li>
          <li className="flex items-center mobile-menu-button">
            <FaBars onClick={handleToggleMobileMenu} />
          </li>
        </ul>
        {isMobileMenuOpen && (
          <div className="absolute top-12 left-0 right-0 bg-white shadow-3xl border-2">
            <ul className="flex justify-between text-black text-md p-4">
              <li className="flex items-center">
                <Link href="/">
                  <span className="py-2 px-4">Home</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/services">
                  <span className="py-2 px-4">Services</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/departments">
                  <span className="py-2 px-4">Departments</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/about">
                  <span className="py-2 px-4">About</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/contact">
                  <span className="py-2 px-4">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
