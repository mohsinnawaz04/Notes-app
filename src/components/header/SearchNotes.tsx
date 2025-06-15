import React, { ChangeEvent, useState } from "react";
import debounce from "debounce";
import { Search, X } from "lucide-react";

export default function SearchNotes() {
  const [inputValue, setInputValue] = useState<string>("");

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;

    if (target.classList.contains("lucide-search")) {
      // Perform Search here...
    }

    if (target.classList.contains("lucide-x")) {
      // Clear the input

      setInputValue("");
    }
  }

  return (
    <form className="max-w-xl grow-1">
      <div
        className="form-group relative flex items-center justify-between"
        onClick={handleClick}
      >
        <input
          type="text"
          value={inputValue}
          placeholder="Search Notes"
          className="input-color-scheme peer inline-block w-full rounded-md px-20"
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* Search Button to apply a search query */}
        <button
          type="button"
          className="text-color absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer rounded-full p-2"
        >
          <Search />
        </button>
        {/* Clear Input Value */}
        <button
          type="button"
          className="text-color absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-full p-2"
        >
          <X />
        </button>
      </div>
    </form>
  );
}
