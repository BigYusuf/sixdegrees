"use client";

import {
  ChevronRight,
  CloudCog,
  Cloudy,
  Database,
  Map,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";


const ProductShow = () => {
  const CardItem = ({
    link,
    icon,
    title,
    desc,
  }: {
    link: string;
    icon: ReactElement;
    title: string;
    desc: string;
  }) => {
    return (
      <div className="hover:card-wrapper flex rounded-3xl min-h-[280px] cursor-pointer hover:bg-green-300 backdrop-filter backdrop-blur-sm bg-opacity-10 hover:backdrop-blur-sm hover:bg-opacity-10 shadow-lg">
        <div className="hover:card-content p-8">
          <div className="flex h-full flex-col gap-2">
            <div className="flex items-start flex-col mb-3 gap-2">
              <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                {icon}
              </div>
              <h2 className="text-black text-lg font-medium">{title}</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow gap-2">
              <p className="leading-relaxed text-xs text-black/60">{desc}</p>
              <Link
                href={link}
                className="mt-3 text-black hover:text-blue-600 inline-flex items-center"
              >
                <span className="text-sm">Documentation</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="tag">Best in the game</div>
            <h2 className="section-title">What We Do</h2>

            <p className="section-desc">
             Empowering your business with tailored cloud solution. We provide advanced cloud security solutions to protect your data
              and infrastructure.
            </p>
          </div>
        </div>
        <div className="relative mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <CardItem
              link="/public_cloud"
              title="Public Cloud"
              desc="Streamline your cloud experience and maximise your cloud investment with Microsoft Azure-aligned public cloud services."
              icon={<Cloudy />}
            />
            <CardItem
              link="/public_private"
              title="Hybrid Cloud"
              desc="Host all of your workloads in the most appropriate location while experiencing the simplicity of one cloud from Six Degrees."
              icon={<Database />}
            />
            <CardItem
              link="/public_claa"
              title="Cyber Security"
              desc="Enhance your cyber security and safeguard your organisation with our cyber security strategy and advisory, consultancy, and managed services."
              icon={<CloudCog />}
            />
            <CardItem
              link="/public_claa"
              title="Connectivity"
              desc="Connect your business through a comprehensive connectivity portfolio delivered via our owned and operated core Next Generation Network (NGN)."
              icon={<Server />}
            />
            <CardItem
              link="/public_claa"
              title="Agile"
              desc="Secure your productivity on any device, anywhere, any time."
              icon={<Zap />}
            />
            <CardItem
              link="/colocation"
              title="Colocation"
              desc="Streamline your hosting with comprehensive colocation services delivered from three UK data centres."
              icon={<Map />}
            />
            <CardItem
              link="/mobile"
              title="Mobile"
              desc="Gain clarity and control of your 5G estate, ensuring ongoing cost efficiencies are managed on your behalf through our managed service."
              icon={<Smartphone />}
            />
          </div>
          {/* <Image src={productImage} alt="productImage" className="mt-10" /> */}
          {/* <Image
            src={pyramidImage}
            height={262}
            width={262}
            alt="pyramidImage"
            className="hidden md:block absolute -right-36 -top-10"
          />
          <Image
            src={tubeImage}
            height={248}
            width={248}
            alt="tubeImage"
            className="hidden md:block absolute bottom-24 -left-36"
          /> */}
        </div>
      </div>
    </section>
  );
};
export default ProductShow;
