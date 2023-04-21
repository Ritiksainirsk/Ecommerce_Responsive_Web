import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenu = [
  { id: 1, name: "Tshirts", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setshowCatMenu, setMobileMenu }: any) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 flex flex-col border-b relative"
                onClick={() => {
                  setshowCatMenu(!showCatMenu);
                }}
              >
                <div className=" flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenu.map((submenu) => {
                      return (
                        <Link key={submenu.id} href={"/"}>
                          <li
                            className="py-4 border-t flex justify-between px-5"
                            onClick={() => {
                              setshowCatMenu(false)
                              setMobileMenu(false);
                            }}
                          >
                            {submenu.name}
                            <span className="opacity-50 text-sm">
                              {submenu.doc_count}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="px-5 py-5 border-b">
                <Link href={`${item?.url}`}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
