"use client";
import Image from "next/image";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import youtubelogo from "@/app/assets/images/yt-logo.jpg";
import HoverDiv from "./HoverDiv";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarData } from "./SidebarData";

type Props = {};

export default function Sidebar({}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  return (
    <div className="h-full flex flex-col text-slate-50">
      <section className="flex items-center gap-4 px-5 py-5">
        <HoverDiv onClick={toggleSidebar} className="p-2 rounded-full">
          <IoIosMenu className="text-3xl" />
        </HoverDiv>
        <Image
          className="w-[90px] h-[20px]"
          src={youtubelogo}
          alt="youtube-logo"
        />
      </section>
      <main
        className={cn("flex flex-col w-[240px] h-full", {
          "w-[100px]": !isSidebarOpen,
        })}
      >
        {sidebarData.map((data, index) => (
          <>
            {" "}
            {data.title && (
              <section className="px-4 w-full">
                <SidebarItem
                  activeIcon={data.activeIcon}
                  defaultIcon={data.defaultIcon}
                  isSidebarOpen={isSidebarOpen}
                  key={index}
                  path={data.path}
                  title={data.title}
                />
              </section>
            )}
            {/* Nested items */}
            {data.nestedItems &&
              isSidebarOpen &&
              data.nestedItems.length > 0 && (
                <section className="px-4 w-full border-t border-zinc-600 mt-4 pt-4">
                  {data.sectionTitle && (
                    <p className="px-3 mb-2 text-slate-300">
                      {data.sectionTitle}
                    </p>
                  )}
                  {data.nestedItems.map((nestedItem, index) => (
                    <SidebarItem
                      activeIcon={nestedItem.activeIcon}
                      defaultIcon={nestedItem.defaultIcon}
                      isSidebarOpen={isSidebarOpen}
                      key={index}
                      path={nestedItem.path}
                      title={nestedItem.title}
                    />
                  ))}
                </section>
              )}
          </>
        ))}
      </main>
    </div>
  );
}

type SidebarItemProps = {
  title: string | undefined;
  defaultIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  path?: string;
  isSidebarOpen: boolean;
};

function SidebarItem(props: SidebarItemProps) {
  const pathname = usePathname();
  const href = props.path || "/";
  return (
    <Link href={href}>
      <HoverDiv
        isActive={pathname === props.path}
        className={cn("w-full flex items-center gap-5", {
          "flex-col gap-2": !props.isSidebarOpen,
        })}
      >
        <section className="text-2xl h-7 w-7 flex items-center">
          {pathname === props.path ? props.activeIcon : props.defaultIcon}
        </section>
        <p
          className={cn("text-sm font-semibold", {
            "text-[10px]": !props.isSidebarOpen,
          })}
        >
          {props.title}
        </p>
      </HoverDiv>
    </Link>
  );
}