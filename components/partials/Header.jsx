import React, { useState, useEffect, useContext, Fragment } from "react";
import { motion } from "framer-motion";
import useDarkMode from "../../hooks/useDarkMode";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import {
  HomeIcon,
  UserIcon,
  ChatIcon,
  SearchIcon,
  CogIcon,
  ChevronDownIcon,
  ChatAltIcon,
  TicketIcon,
  CashIcon,
} from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";

// import { Icon } from "web3uikit";
function Header() {
  const router = useRouter();
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("");

  const [colorTheme, setTheme] = useDarkMode();
  // detect whether user has scrolled the page down by 10px

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const navLinks = [
    { name: "heart-half-outline", link: "/" },
    { name: "home-outline", link: "/" },
    { name: "person-outline", link: "/" },
    { name: "settings-outline", link: "/" },
    { name: "search-outline", link: "/" },
  ];

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && " dark:bg-gray-900 backdrop-blur-sm "
      }`}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-2">
        <div className="flex flex-row justify-between items-center space-x-6 md:space-x-20">
          <Link href="/">
            <img src="/images/logo.svg" className="w-12 md:w-12 " />
          </Link>

          <div className="bg-white p-3  rounded-b-full  flex flex-row justify-evenly w-full">
            {navLinks.map((link) => (
              <span>
                <ion-icon
                  name={link.name}
                  class="text-3xl cursor-pointer hover:animate-bounce"
                ></ion-icon>
              </span>
            ))}
          </div>

          <div
            className="border-4 broder-gray-600 px-4 md:px-6 text-gray-900 md:py-2 py-2 rounded-full cursor-pointer text-white"
            onClick={() => {
              connect();
            }}
          >
            Connect
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
