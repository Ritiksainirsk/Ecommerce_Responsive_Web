import React from "react";

import {BsFacebook,BsTwitter} from 'react-icons/bs'
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black p-10 text-center text-white">
      <h1 className="text-2xl pb-5">Shoes Shope</h1>
      <div className="flex justify-center">
        <p className="w-[700px] pb-8 text-xs md:text-sm">
          dedicated Tailwind CSS language mode that has support for all of the
          custom at-rules and functions Tailwind uses. In some cases, you may
          need to disable native CSS linting/validations if your editor is very
          strict about the syntax it expects in your CSS files.
        </p>
      </div>
      <div className="flex gap-8 text-xl md:text-2xl justify-center">
        <Link href={"https://facebook.com"} target="_blank">
        <BsFacebook/>
        </Link>
        <Link href={"https://twitter.com"} target="_blank">
        <BsTwitter/>
        </Link>
        <Link href={"https://instagram.com"} target="_blank">
        <AiFillInstagram/>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
