import Link from "next/link";

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

function Navbar() {
  return (
    <div className="flex justify-between w-full px-24 py-12">
      <div>
        <h1>GFSS</h1>
      </div>

      <div className="flex gap-12">
        {links.map((link) => (
          <Link href={link.path}>
            <h1 className="font-mono">{link.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
