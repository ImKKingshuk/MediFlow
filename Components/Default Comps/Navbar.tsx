import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import the icons

const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    subMenu: [
      { id: 21, title: "Service", path: "/services/service1" },
      { id: 22, title: "Service", path: "/services/service2" },
    ],
  },
  {
    id: 3,
    title: "Departments",
    path: "/departments",
    subMenu: [
      { id: 31, title: "Department", path: "/departments/department1" },
      { id: 32, title: "Department", path: "/departments/department2" },
    ],
  },
  {
    id: 4,
    title: "About",
    path: "/about",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
];

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 z-40">
      <div className="backdrop-blur mx-auto">
        <div className="flex justify-between items-center text-black text-md p-4">
          <Link href="/">
            <span className="cursor-pointer">Logo</span>
          </Link>
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FiX
                className="h-6 w-6 cursor-pointer"
                onClick={handleMobileMenuToggle}
              />
            ) : (
              <FiMenu
                className="h-6 w-6 cursor-pointer"
                onClick={handleMobileMenuToggle}
              />
            )}
          </div>
        </div>
        <ul
          className={`flex md:space-x-4 ${
            isMobileMenuOpen ? "flex-col" : "hidden"
          }`}
        >
          {menuData.map((item) => (
            <li
              key={item.id}
              className={`relative group ${
                isMobileMenuOpen ? "w-full" : "w-fit"
              }`}
            >
              <Link href={item.path}>
                <span className="py-2 px-4 cursor-pointer">{item.title}</span>
              </Link>
              {item.subMenu && (
                <ul
                  className={`absolute ${
                    isMobileMenuOpen ? "block" : "hidden"
                  } top-12 ${
                    isMobileMenuOpen ? "w-full" : "w-fit"
                  } space-y-2 rounded-lg py-2 px-3 bg-white shadow-3xl border-2`}
                >
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link href={subItem.path}>
                        <span className="text-gray-700 py-2 cursor-pointer">
                          {subItem.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
