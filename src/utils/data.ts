import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
// import { Users } from "lucide-react";
// import { Lock } from "lucide-react";
// import { Dessert } from "lucide-react";
// import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
  {
    name: "Features",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Design",
        link: "design",
        desc: "Responsive design",
        icon: PanelsTopLeft,
      },
      {
        name: "Management",
        link: "management",
        desc: "Site control",
        icon: Bolt,
      },
      {
        name: "Navigation",
        link: "navigation",
        desc: "Link pages",
        icon: PanelTop,
      },
      {
        name: "CMS",
        link: "cms",
        desc: "Management content",
        icon: Database,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Markplace",
        desc: "Browse templates",
        link: "store",
        icon: ShoppingBag,
      },
      {
        name: "Meetups",
        link: "meetups",
        desc: "Upcoming events",
        icon: MapPin,
      },
      {
        name: "Updates",
        link: "updates",
        desc: "Changelog",
        icon: BellDot,
      },
      {
        name: "Academy",
        link: "academy",
        desc: "Watch lessions",
        icon: Play,
      },
      {
        name: "Blog",
        link: "blog",
        desc: "Posts",
        icon: BookOpenText,
      },
      {
        name: "Figma",
        link: "figma",
        desc: "Plugin",
        icon: Figma,
      },
      {
        name: "Experts",
        desc: "Jobs",
        link: "experts",
        icon: BriefcaseBusiness,
      },
      {
        name: "Gallery",
        link: "gallery",
        desc: "Images",
        icon: Images,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",

        link: "help",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Community",
        link: "management",
        desc: "Project help",
        icon: MessageCircle,
      },
      {
        name: "Emergency",
        link: "management",
        desc: "Urgent issues",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },


  {
    name: "Client",
    link: "management",
  },
];
