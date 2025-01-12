"use client";

import Image from "next/image";
import Link from "next/link";

// import ArrowRight from "@/assets/arrow-right.svg";
// import MenuIcon from "@/assets/menu.svg";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>

        <div className="inline-flex gap-1 items-center">
          <p>Join the winning Team</p>
          {/* <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" /> */}
        </div>
      </div>
      <div className="py-5 bg-transparent">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src="https://www.6dg.co.uk/wp-content/uploads/2023/08/3c9133b6e7684aeda1f1ec7dbc998d20-1.webp"
              alt="Logo"
              height={80}
              width={80}
            />
            {/* <MenuIcon className="h-5 w-5 md:hidden" /> */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href={""}>About</Link>
              <Link href={""}>Clients</Link>
              <Link href={""}>Features</Link>
              <Link href={""}>Resources</Link>
              <button className="btn btn-primary">Get Started</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
