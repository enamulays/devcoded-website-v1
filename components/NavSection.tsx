"use client";
import React, { useEffect, useRef, useState } from "react";
import LogoIcon from "../data/icon/LogoIcon";
import NavElement from "../element/NavElement";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

const NavSection = () => {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setNavigation(!navigation);
  };
  const OutsideClickToggleClose = (e:MouseEvent) => {
    if(navRef.current && !navRef.current.contains(e.target as Node)){
      setNavigation(false);
    }
  };
  console.log(navigation);

  useEffect(() => {
    document.addEventListener("click", OutsideClickToggleClose);
    return () => {
      document.removeEventListener("click", OutsideClickToggleClose);
    };
  }, []);

  let bgColor = "";
  if (pathname === "/blog") {
    bgColor = "bg-[#EEF2FF]";
  }

  return (
    <div
      className={`px-[12px] md:px-[30px] lg:px-[100px] ${bgColor}`}
      ref={navRef}
    >
      <div className="py-[12px] md:py-[24px] flex justify-between items-center">
        <Link href={"/"}>
          <LogoIcon />
        </Link>
        <NavElement navigation={navigation} setNavigation = {setNavigation}/>
        <button className="text-[25px] lg:hidden" onClick={handleToggle}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default NavSection;
