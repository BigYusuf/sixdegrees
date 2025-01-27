"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/sixDegrees.webp";
import {
  SocialInsta,
  SocialLinkedIn,
  SocialPin,
  SocialX,
  SocialYoutube,
} from "@/utils/icons";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        {/* <div className="relative inline-flex before:content-[''] before:top-2 before:blur before:bottom-0 before:h-full before:w-full before:absolute"> */}
        <div className="relative inline-flex before:content-[''] before:top-2 before:blur before:bottom-0 before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <div className="relative rounded-lg p-2 bg-black/90">
            <Image
              className="relative"
              src={Logo}
              // src="https://www.6dg.co.uk/wp-content/uploads/2023/08/3c9133b6e7684aeda1f1ec7dbc998d20-1.webp"
              height={80}
              width={80}
              alt="Logo"
            />
          </div>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Clients</Link>
          <Link href={"/"}>Resources</Link>
          <Link href={"/"}>Careers</Link>
          <Link href={"/"}>Help</Link>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialPin />
          <SocialLinkedIn />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2025 Six Degrees Inc, All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
