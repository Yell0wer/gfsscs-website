import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resources",
    path: "/resources",
  },
  {
    name: "schedule",
    path: "/schedule",
  },
];

function Navbar({ page }: { page: string }) {
  return (
    <div className="px-36 py-12 flex justify-between w-full items-center">
      <div>
        <h1 className="text-2xl">GFSS</h1>
      </div>

      <div className="flex gap-12">
        {links.map((link) => (
          <Link href={link.path} key={link.name}>
            <h1
              className={clsx(
                "font-mono hover:text-primary transition-all duration-300",
                {
                  "text-primary": page === link.path,
                }
              )}
            >
              {link.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
