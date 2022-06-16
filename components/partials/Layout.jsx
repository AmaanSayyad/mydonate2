import React, { useState, useEffect } from "react";
import {
  EyeIcon,
  HeartIcon,
  BookOpenIcon,
  SupportIcon,
  MusicNoteIcon,
} from "@heroicons/react/outline";

import Link from "next/link";
import Router, { useRouter } from "next/router";

function Layout(props) {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0", link: "/" },
    {
      name: "Message",
      icon: "chatbox-ellipses-outline",
      dis: "translate-x-16",
      link: "/chat",
    },
    {
      name: "Search",
      icon: "search-outline",
      dis: "translate-x-32",
      link: "/search",
    },
    {
      name: "NFT",
      icon: "ticket-outline",
      dis: "translate-x-48",
      link: "/nft",
    },
    {
      name: "Settings",
      icon: "settings-outline",
      dis: "translate-x-64",
      link: "/setting",
    },
  ];
  let active_ = 0;
  if (typeof window !== "undefined") {
    let state = localStorage.getItem("active");
    active_ = state;
  }

  const [active, setActive] = useState(active_);

  const router = useRouter();

  useEffect(() => {
    if (router.route === "/") {
      setActive(0);
      localStorage.setItem("active", 0);
    }
    if (router.route === "/chat") {
      setActive(1);
      localStorage.setItem("active", 1);
    }
    if (router.route === "/search") {
      setActive(2);
      localStorage.setItem("active", 2);
    }
    if (router.route === "/nft") {
      setActive(3);
      localStorage.setItem("active", 3);
    }
    if (router.route === "/setting") {
      setActive(4);
      localStorage.setItem("active", 4);
    }
    //  if (router.route === "/search") setActive(2);
    // if (router.route === "/profile") setActive(3);
    // if (router.route === "/setting") setActive(4);
  }, [active]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-7xl mx-4 md:mx-auto px-2 sm:px-3">
        <div className="py-12 md:py-20">
          {/* Section header */}

          {/* Items */}
          {/* <div className="max-w-sm mx-auto grid gap-4 md:grid-cols-2 mt-12 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none"> */}
          <div className="max-w-sm mx-auto  md:max-w-2xl lg:max-w-none">
            {/* 1st item */}

            {/* 2nd item home page */}

            {props.children}
            {/* 3rd item */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
