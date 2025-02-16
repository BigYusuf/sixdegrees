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

const serviceData = [
  {
    id: 1,
    title: "Managed IT Services",
    item1: "Proactive monitoring and maintenance of IT systems",
    item2: "24/7 support for end users and devices",
    item3: "Remote and onsite IT support",
    item4: "Network infrastructure management",
    item5: "Backup and disaster recovery solutions",
    icon: <CloudCog />,
  },
  {
    id: 2,
    title: "Cloud Solutions",
    item1: "Cloud infrastructure management (AWS, Azure, Google Cloud)",
    item2: "Cloud migration and integration",
    item3: "Scalable cloud storage and data management",
    item4: "Secure cloud-based collaboration tools",
    item5: "Disaster recovery and business continuity planning",
    icon: <Cloudy />,
  },
  {
    id: 3,
    title: "Cybersecurity Solutions",
    item1: "Real-time threat monitoring and incident response",
    item2: "Firewall and VPN setup",
    item3: "Endpoint protection and malware prevention",
    item4: "Security audits and vulnerability assessments",
    item5: "Data encryption and privacy compliance (GDPR, HIPAA, etc.)",
    icon: <Server />,
  },
  {
    id: 4,
    title: "Business Continuity Planning",
    item1: "Disaster recovery strategies and backup solutions",
    item2: "Cloud-based business continuity services",
    item3: "Crisis management and emergency planning",
    item4: "High-availability systems setup",
    item5: "",
    icon: <Zap />,
  },
  {
    id: 5,
    title: "IT Consulting and Strategy",
    item1: "Technology roadmaps for long-term growth",
    item2: "IT infrastructure optimization",
    item3: "Business process automation and workflow solutions",
    item4: "IT project management and implementation",
    item5: "Expert advice on tech investments and software selection",
    icon: <Smartphone />,
  },
  {
    id: 6,
    title: "Network Design & Management",
    item1: "Customized network design and architecture",
    item2: "Installation and configuration of routers, switches, and firewalls",
    item3: "Network performance monitoring and optimization",
    item4: "Wireless network setup and management",
    item5: "Network security and access control management",
    icon: <Database />,
  },
  {
    id: 6,
    title: "Software Development & Integration",
    item1: "Custom software solutions tailored to your business needs",
    item2: "Application integration and API management",
    item3: "CRM, ERP, and other enterprise software deployment",
    item4: "Software updates, upgrades, and patch management",
    item5: "",
    icon: <Map />,
  },
];
const ProductShow = () => {
  const CardItem = ({
    link,
    icon,
    title,
    desc,
    item1,
    item2,
    item3,
    item4,
    item5,
  }: {
    link: string;
    icon: ReactElement;
    title: string;
    desc: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
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
              {desc && (
                <p className="leading-relaxed text-xs text-black/60">{desc}</p>
              )}
              {item1 && (
                <p className="leading-relaxed text-xs text-black/60">{item1}</p>
              )}
              {item1 && (
                <p className="leading-relaxed text-xs text-black/60">{item2}</p>
              )}
              {item1 && (
                <p className="leading-relaxed text-xs text-black/60">{item3}</p>
              )}
              {item1 && (
                <p className="leading-relaxed text-xs text-black/60">{item4}</p>
              )}
              {item1 && (
                <p className="leading-relaxed text-xs text-black/60">{item5}</p>
              )}
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
              We offer comprehensive IT solutions designed to enhance business
              efficiency, optimize technology infrastructure, and drive
              innovation.
            </p>
            {/* <p className="section-desc">
             Empowering your business with tailored cloud solution. We provide advanced cloud security solutions to protect your data
              and infrastructure.
            </p> */}
          </div>
        </div>
        <div className="relative mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {serviceData?.map(
              (item: {
                id: number;
                title: string;
                item1: string;
                item2: string;
                item3: string;
                item4: string;
                item5: string;
                icon: ReactElement;
              }) => (
                <CardItem
                  key={item?.id}
                  link="/public_cloud"
                  title={item?.title}
                  desc={""}
                  item1={item?.item1}
                  item2={item?.item2}
                  item3={item?.item3}
                  item4={item?.item4}
                  item5={item?.item5}
                  icon={item?.icon}
                />
              )
            )}
            {/* 
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
             */}
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
