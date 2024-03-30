import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Bell,
  CircleUserRound,
  EllipsisVertical,
  Menu,
  Mic,
  Search,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 py-2.5 flex justify-between items-center gap-32">
      <section className="flex items-center gap-5">
        <button>
          <Menu />
        </button>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="YouTube Logo"
            width={100}
            height={100}
            className="min-w-24"
          />
        </Link>
      </section>

      <section className="hidden md:flex flex-grow gap-3">
        <div className="flex border border-zinc-800 pl-5 rounded-full overflow-hidden w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none"
          />
          <button className="bg-zinc-800 px-5 py-1.5 border-l border-zinc-800">
            <Search />
          </button>
        </div>
        <button className="bg-zinc-800 p-2 rounded-full">
          <Mic />
        </button>
      </section>

      <section className="flex gap-3 items-center">
        <SignedOut>
          <button className="mr-1">
            <EllipsisVertical />
          </button>
          <SignInButton mode="modal">
            <button className="flex items-center px-3 py-1.5 rounded-full gap-x-1 border border-zinc-800">
              <CircleUserRound className="stroke-blue-500" />
              <span className="text-blue-500 text-sm font-medium">Sign in</span>
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <button className="mr-1 md:hidden">
            <Search />
          </button>
          <button className="mr-1 md:hidden">
            <Mic />
          </button>
          <button className="mr-1">
            <Video size={28} />
          </button>
          <button className="mr-1">
            <Bell />
          </button>
          <UserButton />
        </SignedIn>
      </section>
    </header>
  );
}
