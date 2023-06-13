import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { useBurger } from "@/context/BurgerProvider";

export function Navbar() {
  const { isBurgerOpen, toggleBurger } = useBurger();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-qanttoBlack-light dark:bg-qanttoBlack-default">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-qanttoBlack-light dark:focus:ring-gray-600"
              onClick={toggleBurger}
            >
              <span className="sr-only">Open sidebar</span>
              {isBurgerOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt2 className="w-6 h-6" />
              )}
            </button>
            <Link href="/" className="flex ml-2 md:mr-24">
              <Image
                src="/logo.svg"
                className="h-8 mr-3"
                alt="Qantto Logo"
                width={32}
                height={32}
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Qantto
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center relative ml-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-qanttoBlack-default rounded-full focus:ring-4 focus:ring-qanttoBlack-light"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                    src="/profile-picture.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                className={`${
                  isProfileOpen ? "block" : "hidden"
                } z-50 my-4 absolute right-0 top-7 text-base list-none bg-white divide-y  rounded shadow-lg dark:bg-qanttoBlack-default divide-qanttoBlack-light`}
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    John Doe
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    johndoe@email.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-qanttoBlack-light dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-qanttoBlack-light dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
