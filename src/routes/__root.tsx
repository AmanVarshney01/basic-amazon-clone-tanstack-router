import amazonLogo from "@/assets/amazon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "@/index.css";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { lazy, Suspense, useState } from "react";
import { z } from "zod";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

const searchSchema = z.object({
  q: z.string().optional(),
});

export const Route = createRootRoute({
  component: RootComponent,
  validateSearch: zodValidator(searchSchema),
});

function RootComponent() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen max-w-7xl mx-auto">
      <header className="flex flex-row justify-between gap-2 p-3 border-b sticky top-0 bg-white">
        <Link to="/" search={{}}>
          <img src={amazonLogo} alt="amazon" className="size-8" />
        </Link>
        <div className="flex flex-row gap-3 items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.history.pushState(null, "", `/?q=${searchInput}`);
            }}
          >
            <Input
              type="text"
              placeholder="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
          <nav className="flex flex-row items-center">
            <Button variant="link" asChild>
              <Link to="/" search={{}} className="[&.active]:font-bold">
                Home
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/about" search={{}} className="[&.active]:font-bold">
                About
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/contact" search={{}} className="[&.active]:font-bold">
                Contact
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  );
}
