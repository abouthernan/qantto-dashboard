"use client";
import { useState } from "react";
import { useBurger } from "@/context/BurgerProvider";
import { Navbar } from "./Navbar";
import {
  HiChartPie,
  HiHome,
  HiDocumentAdd,
  HiChevronDown,
  HiTrendingUp,
  HiTable,
  HiLogout,
  HiUsers,
} from "react-icons/hi";

export function SidebarComponent() {
  const { isBurgerOpen } = useBurger();
  return (
    <>
      <Navbar />

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 -translate-x-full sm:translate-x-0 h-screen pt-20 transition-transform bg-white dark:bg-qanttoBlack-default border-r border-qanttoBlack-light ${
          isBurgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-qanttoBlack-default">
          <ul className="space-y-2 font-medium">
            <NavbarItem url="#" Icon={HiChartPie} label="Dashboard" />
            <NavbarItem url="#" Icon={HiHome} label="Welcome Page" />
            <NavbarItemDropdown />
            <NavbarItem url="#" Icon={HiUsers} label="Users" />
            <NavbarItem url="#" Icon={HiTable} label="Leads" />
            <NavbarItem url="#" Icon={HiTrendingUp} label="Data" />
            <NavbarItem url="#" Icon={HiLogout} label="Sign out" />
          </ul>
        </div>
      </aside>
    </>
  );
}

// li items for navbar
interface NavbarItem {
  url: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  isDropdown?: boolean;
}

function NavbarItem({ url, Icon, label }: NavbarItem) {
  return (
    <>
      <li>
        <a
          href={url}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-qanttoBlack-light transition-colors duration-300 group"
        >
          <Icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="ml-3">{label}</span>
        </a>
      </li>
    </>
  );
}

// li items for navbar with dropdown
function NavbarItemDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-qanttoBlack-light"
        aria-controls="dropdown"
        data-collapse-toggle="dropdown"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <HiDocumentAdd
          className={`flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
            isDropdownOpen ? "dark:text-white" : ""
          }`}
        />
        <span className="flex-1 ml-3 text-left whitespace-nowrap">
          Services
        </span>
        <HiChevronDown
          className={`text-gray-300 transition-all ${
            isDropdownOpen ? "transform -rotate-180" : ""
          }`}
        />
      </button>
      <ul
        id="dropdown-example"
        className={`py-2 space-y-2 ${isDropdownOpen ? "block" : "hidden"}`}
      >
        <DropdownItem url="#" label="Services" />
        <DropdownItem url="#" label="Sub services" />
      </ul>
    </li>
  );
}

// li items for dropdown
interface DropdownItem {
  url: string;
  label: string;
}

function DropdownItem({ url, label }: DropdownItem) {
  return (
    <li>
      <a
        href={url}
        className="flex items-center w-full p-2 text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-qanttoBlack-light transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  );
}
