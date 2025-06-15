import { Menu, X } from "lucide-react";
import { useLayout } from "@/hooks/useLayout";

export default function MenuToggle() {
  const { isHeaderExpanded, setIsHeaderExpanded } = useLayout();

  return (
    <button
      onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
      className="menu w-6 cursor-pointer"
    >
      {!isHeaderExpanded ? <Menu /> : <X />}
    </button>
  );
}
