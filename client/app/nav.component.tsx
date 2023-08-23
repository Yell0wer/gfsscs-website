import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo2.png'

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
    <div className="px-4 md:px-15vw py-8 flex w-full justify-center md:justify-between items-center bg-dark text-white">
      <Link href="/" className="hidden md:inline">
        <Image src={logo} height="110" alt="GFSSCS" />
      </Link>

      <div className="flex gap-10">
        {links.map((link) => (
          <Link href={link.path} key={link.name}>
            <h1
              className={clsx(
                "text-sm lg:text-base font-mono hover:text-gold transition-all duration-200",
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