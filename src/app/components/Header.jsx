"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaBarsStaggered, FaChevronDown } from "react-icons/fa6";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null); // Track open dropdown
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: "Home", href: "/home-page", id: "home" },
    {
      name: "Trading",
      id: "trading",
      subItems: [{ name: "Accounts", href: "/" }],
    },
    {
      name: "Promotions",
      id: "promotions",
      subItems: [
        { name: "20% Bonus", href: "/20-bonus" },
        { name: "Trade to Win", href: "/trade-to-win" }

      ],
    },
    {
      name: "Partnership",
      id: "partnership",
      subItems: [{ name: "Introducing Broker", href: "/" }],
    },
    { name: "News/Blogs", href: "/news-blogs", id: "news-blogs" },
  ];

  return (
    <div className="bg-[#0d1821]">
      <nav className="flex items-center justify-between container py-3 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="WinProFX Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-x-6 items-center">
          {navigation.map((item) => {
            const isActive =
              item.href === pathname || // Exact match for top-level routes
              (item.subItems &&
                item.subItems.some((subItem) => subItem.href === pathname)); // Match sub-items

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.subItems && setShowDropdown(item.id)}
                onMouseLeave={() => item.subItems && setShowDropdown(null)}
              >
                <Link
                  href={item.href || "#"}
                  className={`text-base cursor-pointer flex items-center ${isActive ? "text-primary" : "text-white"
                    }`}
                >
                  <span>{item.name}</span>
                  {item.subItems && (
                    <FaChevronDown
                      className={`transition-transform text-sm mx-3 ${showDropdown === item.id ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>

                {item.subItems && showDropdown === item.id && (
                  <div className="absolute left-0 pt-2 z-50">
                    <div className="bg-white shadow-lg rounded-md">
                      {item.subItems.map((subItem) => (
                        <div
                          key={subItem.href}
                          onClick={() => {
                            router.push(subItem.href);
                            setShowDropdown(null); // Hide dropdown on selection
                          }}
                          className={`block font-medium cursor-pointer px-4 whitespace-pre py-2 ${pathname === subItem.href
                            ? "text-primary"
                            : "text-secondary"
                            } hover:bg-secondary hover:text-white`}
                        >
                          {subItem.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="md:hidden flex gap-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <FaBarsStaggered aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {/* Mobile Menu Dialog */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 shadow-lg  rounded-tr-lg rounded-br-lg w-[85%] overflow-y-auto bg-gradient-to-b from-[#0d1428] via-[#0a2642] to-[#034a77] px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="relative w-24 h-12">
                <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <IoClose aria-hidden="true" className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.id}>
                      {item.subItems ? (
                        <details className="group">
                          <summary className="py-2 text-base font-semibold leading-7 text-white cursor-pointer flex items-center ">
                            <span>{item.name}</span>
                            <FaChevronDown className="text-white text-sm mx-3 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="pl-6 space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3 py-1 text-sm ${pathname === subItem.href ? "text-primary" : "text-gray-300"
                                  }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block rounded-lg py-2 text-base font-semibold leading-7 ${pathname === item.href ? "text-primary" : "text-white"
                            }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </div>
  );
};

export default Navbar;
