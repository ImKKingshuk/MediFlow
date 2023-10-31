"use client";
import Link from "next/link";
export const menuData = [
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
    <div className="mx-auto w-full fixed ">
      <div className="container mx-auto">
        <ul className="flex justify-between">
          {menuData.map((item) => (
            <li key={item.id} className="relative group flex">
              <Link href={item.path}>
                <a className="text-white py-2 px-4">{item.title}</a>
              </Link>
              {item.subMenu && (
                <div className="absolute hidden mt-2 space-y-2 py-2 px-3 bg-white group-hover:block">
                  {item.subMenu.map((subItem) => (
                    <Link key={subItem.id} href={subItem.path}>
                      <a className="text-gray-700">{subItem.title}</a>
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
