"use client";
import Link from "next/link";
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
      { id: 21, title: "Service 1", path: "/services/service1" },
      { id: 22, title: "Service 2", path: "/services/service2" },
    ],
  },
  {
    id: 3,
    title: "Departments",
    path: "/departments",
    subMenu: [
      { id: 31, title: "Department 1", path: "/departments/department1" },
      { id: 32, title: "Department 2", path: "/departments/department2" },
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
  return (
    <div className=" py-3 w-full fixed bg-blue-500 z-999 ">
      <div className="container mx-auto">
        <ul className="flex justify-between text-black text-md">
          {menuData.map((item) => (
            <li key={item.id} className="relative group flex">
              <Link href={item.path}>
                <span className=" py-2 px-4">{item.title}</span>
              </Link>
              {item.subMenu && (
                <div className="absolute hidden mt-2 space-y-2 py-2 px-3 bg-white group-hover:block">
                  {item.subMenu.map((subItem) => (
                    <Link key={subItem.id} href={subItem.path}>
                      <span className="text-gray-700">{subItem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
