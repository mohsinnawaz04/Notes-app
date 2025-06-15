"use client";

import { ThemeToggle } from "../ThemeToggle";
import MenuToggle from "./MenuToggle";
import SearchNotes from "./SearchNotes";

export default function Header() {
  return (
    <section>
      <div className="header font-poppins">
        <nav className="flex items-center justify-between bg-white px-5 py-2 shadow-md dark:bg-zinc-900">
          <MenuToggle />
          <SearchNotes />
          <ThemeToggle />
        </nav>
      </div>
    </section>
  );
}
