"use client";

// import Image from "next/image";
import Link from "next/link";

import { ArrowRight, MenuIcon } from "@/utils/icons";
// import { useState } from "react";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowBigLeftDash,
  ChevronDown,
  Fingerprint,
  PieChart,
  SquareSlash,
  TextCursorIcon,
} from "lucide-react";
import LogoText from "./LogoText";
// import Logo from "@/assets/Logo.png";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: PieChart,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: TextCursorIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: Fingerprint,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquareSlash,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowBigLeftDash,
  },
];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircle },
//   { name: "Contact sales", href: "#", icon: Phone },
// ];
const Header = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>

        <div className="inline-flex gap-1 items-center">
          <p>Join the winning Team</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5 bg-transparent">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* <Image
              src={Logo}
              // src="https://www.6dg.co.uk/wp-content/uploads/2023/08/3c9133b6e7684aeda1f1ec7dbc998d20-1.webp"
              alt="Logo"
              height={80}
              width={80}
              /> */}
          <LogoText />
            <MenuIcon className="h-5 w-5 md:hidden" />

            <PopoverGroup className="hidden md:flex gap-6 text-black/60 items-center">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                  Product
                  {/* <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" /> */}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
              {/* <Link className="font-semibold" href={""}>About</Link> */}
              <Link
                className=" text-sm/6 font-semibold text-gray-900"
                href={""}
              >
                Clients
              </Link>
              <Link
                className=" text-sm/6 font-semibold text-gray-900"
                href={""}
              >
                Features
              </Link>
              <Link
                className=" text-sm/6 font-semibold text-gray-900"
                href={""}
              >
                Resources
              </Link>
              <button className="btn btn-primary">Get Started</button>
            </PopoverGroup>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
