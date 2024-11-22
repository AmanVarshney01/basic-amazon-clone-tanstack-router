import amazonLogo from "../assets/amazon.svg";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex flex-row justify-between gap-2 p-3 border-b sticky top-0 ">
      <img src={amazonLogo} alt="amazon" className="size-8" />
      <div className="flex flex-row gap-3 items-center">
        <Input type="text" placeholder="search" />
        <nav className="flex flex-row items-center">
          <Button variant={"link"} asChild>
            <a href="">Home</a>
          </Button>
          <Button variant={"link"} asChild>
            <a href="">About</a>
          </Button>
          <Button variant={"link"} asChild>
            <a href="">Contact</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
