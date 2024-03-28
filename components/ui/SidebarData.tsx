import { BsGrid3X3Gap } from "react-icons/bs";
import { GoHome, GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";

import { IoMdPerson } from "react-icons/io";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { VscHistory } from "react-icons/vsc";
import YtShortsIcon from "@/app/assets/svg/YtShortsIcon";
import { MdOutlineSubscriptions, MdSubscriptions } from "react-icons/md";

type SidebarItem = {
  title?: string;
  path?: string;
  defaultIcon?: React.ReactNode; // ReactNode is a type that can be anything that can be rendered in React (string, number, element, fragment, html, jsx etc)
  activeIcon?: React.ReactNode;
  nestedItems?: SidebarItem[]; // Nested items for dropdown menu in sidebar
  sectionTitle?: string;
};

export const sidebarData: SidebarItem[] = [
  {
    title: "Home",
    path: "/",
    defaultIcon: <GoHome />,
    activeIcon: <GoHomeFill />,
  },
  {
    title: "Trending",
    path: "/trending",
    defaultIcon: <BsGrid3X3Gap />,
    activeIcon: <BsGrid3X3Gap />,
  },
  {
    title: "Shorts",
    path: "/shorts",
    defaultIcon: <YtShortsIcon />,
    activeIcon: <SiYoutubeshorts />,
  },
  {
    title: "Subscriptions",
    path: "/Subscriptions",
    defaultIcon: <MdOutlineSubscriptions />,
    activeIcon: <MdSubscriptions />,
  },
  {
    sectionTitle: "Library",
    nestedItems: [
      {
        title: "History",
        path: "/history",
        defaultIcon: <VscHistory />,
        activeIcon: <RiVideoFill />,
      },
      {
        title: "Your Videos",
        path: "/your-videos",
        defaultIcon: <RiVideoLine />,
        activeIcon: <RiVideoFill />,
      },
    ],
  },
  {
    sectionTitle: "Account",
    nestedItems: [
      {
        title: "Your Channel",
        path: "/your-channel",
        defaultIcon: <IoMdPerson />,
        activeIcon: <IoMdPerson />,
      },
    ],
  },
];
