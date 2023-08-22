import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'

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
  }
]

export default function Nav({ page }: { page: string }) {
  return (
    <div className="px-15vw py-8 flex justify-between w-full items-center text-white">
      <Link href="/">
        <Image src={logo} height="100" alt="GFSSCS" />
      </Link>

      <div className="flex gap-10">
        {links.map((link) => (
          <Link href={link.path} key={link.name}>
            <h1
              className={clsx(
                "text-1xl font-mono hover:text-gold transition-all duration-200",
                {
                  "text-gold": page === link.path
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