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
      { id: 21, title: "Service 1 2", path: "/services/service1" },
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
  return (
    <div className=" w-full fixed 0 z-40 ">
      <div className="backdrop-blur mx-auto ">
        <ul className="flex justify-between text-black text-md p-4">
          {menuData.map((item) => (
            <li key={item.id} className="relative group flex">
              <Link href={item.path}>
                <span className=" py-2 px-4">{item.title}</span>
              </Link>
              {item.subMenu && (
                <ul className="absolute hidden top-12 w-fit space-y-2 rounded-lg py-2 px-3 bg-white shadow-3xl border-2 group-hover:block">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link href={subItem.path}>
                        <span className="text-gray-700 py-2">
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
