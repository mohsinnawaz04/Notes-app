import Aside from "@/components/aside/Aside";
import Notes from "@/components/notes/Notes";

export default function Home() {
  return (
    <div className="main mt-10 flex md:gap-40">
      <Aside />
      <Notes />
    </div>
  );
}
