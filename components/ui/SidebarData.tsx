import YtShortsIcon from "@/app/assets/svg/YtShortsIcon";
import { SidebarItemProps } from "@/types";
import {
  Clapperboard,
  Gamepad,
  History,
  Home,
  LayoutGrid,
  Music2,
  Podcast,
  SquarePlay,
  SquarePlayIcon,
  SquareUserRound,
  Trophy,
} from "lucide-react";

export const sidebarData: SidebarItemProps[] = [
  {
    title: "Home",
    path: "/",
    defaultIcon: <Home />,
    activeIcon: <Home />,
  },

  {
    title: "Shorts",
    path: "/shorts",
    defaultIcon: <YtShortsIcon />,
    activeIcon: <YtShortsIcon />,
  },
  {
    sectionTitle: "Explore",
    nestedItems: [
      {
        title: "Trending",
        path: "/trending",
        defaultIcon: <LayoutGrid />,
        activeIcon: <LayoutGrid />,
      },
      {
        title: "Music",
        path: "/Music",
        defaultIcon: <Music2 />,
        activeIcon: <Music2 />,
      },
      {
        title: "Movies",
        path: "/Movies",
        defaultIcon: <Clapperboard />,
        activeIcon: <Clapperboard />,
      },
      {
        title: "Gaming",
        path: "/Gaming",
        defaultIcon: <Gamepad />,
        activeIcon: <Gamepad />,
      },
      {
        title: "Sports",
        path: "/Sports",
        defaultIcon: <Trophy />,
        activeIcon: <Trophy />,
      },
      {
        title: "Podcasts",
        path: "/Podcasts",
        defaultIcon: <Podcast />,
        activeIcon: <Podcast />,
      },
    ],
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
