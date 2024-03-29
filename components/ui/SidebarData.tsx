import YtShortsIcon from "@/app/assets/svg/YtShortsIcon";
import { SidebarItemProps } from "@/types";
import {
  History,
  Home,
  LayoutGrid,
  SquarePlay,
  SquarePlayIcon,
  SquareUserRound,
} from "lucide-react";

export const sidebarData: SidebarItemProps[] = [
  {
    title: "Home",
    path: "/",
    defaultIcon: <Home />,
    activeIcon: <Home />,
  },
  {
    title: "Trending",
    path: "/trending",
    defaultIcon: <LayoutGrid />,
    activeIcon: <LayoutGrid />,
  },
  {
    title: "Shorts",
    path: "/shorts",
    defaultIcon: <YtShortsIcon />,
    activeIcon: <YtShortsIcon />,
  },

  {
    sectionTitle: "Library",
    nestedItems: [
      {
        title: "History",
        path: "/history",
        defaultIcon: <History />,
        activeIcon: <History />,
      },
      {
        title: "Your Videos",
        path: "/your-videos",
        defaultIcon: <SquarePlay />,
        activeIcon: <SquarePlayIcon />,
      },
    ],
  },
  {
    sectionTitle: "Account",
    nestedItems: [
      {
        title: "Your Channel",
        path: "/your-channel",
        defaultIcon: <SquareUserRound />,
        activeIcon: <SquareUserRound />,
      },
    ],
  },
];
