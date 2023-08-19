import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    name: "home_",
    path: "/",
  },
  {
    name: "resources_",
    path: "/resources",
  },
  {
    name: "schedule_",
    path: "/schedule",
  },
];

export default function Nav({ page }: { page: string }) {
  return (
    <div className="px-15vw py-10 flex justify-between w-full items-center text-white">
      <div>
        <h1 className="text-2xl font-sans">GFSS</h1>
      </div>

      <div className="flex gap-10">
        {links.map((link) => (
          <Link href={link.path} key={link.name}>
            <h1
              className={clsx(
                "text-1xl font-mono hover:text-gold transition-all duration-200",
                {
                  "text-gold": page === link.path,
                }
              )}
            >
              {link.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  )
}