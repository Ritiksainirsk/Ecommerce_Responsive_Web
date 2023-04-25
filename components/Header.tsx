import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);

  const NavbarControll = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly) {
        setshow("-translate-y-80");
      } else {
        setshow("shadow-sm");
      }
    } else {
      setshow("translate-y-0");
    }
    setLastScrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", NavbarControll);
    return () => {
      window.removeEventListener("scroll", NavbarControll);
    };
  }, [lastScrolly]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href={"/"}>
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setshowCatMenu={setshowCatMenu} />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setshowCatMenu={setshowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className=" flex items-center gap-2 text-black">
          {/* icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <AiOutlineHeart className=" text-[15px] md:text-[20px]" />
            <div className=" h-[14px] md:[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] md:py-[9px]">
              25
            </div>
          </div>
          {/* icon end */}
          {/* icon start */}
          <Link href={"/cart"}>
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className=" text-[15px] md:text-[20px]" />
              <div className=" h-[14px] md:[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] md:py-[9px]">
                5
              </div>
            </div>
          </Link>
          {/* icon end */}
          <div className="w-8 md-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
