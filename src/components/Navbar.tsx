"use client"
import {
  BellDot,
  Briefcase,
  ChevronDown,
  HandCoins,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  {
    title: "Jobs",
    href: "/",
    icon: <Briefcase width={24} height={24} strokeWidth={1.25} />,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: <MessageSquare width={24} height={24} strokeWidth={1.25} />,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: <HandCoins width={24} height={24} strokeWidth={1.25} />,
  },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="w-full md:h-24 flex justify-between items-center px-2 sm:px-6 py-4 md:py-0 gap-4 md:gap-0 flex-wrap md:flex-nowrap  md:px-10 bg-white border-b-2 border-clade-gray">
      <div className="flex items-center justify-center  gap-2">
        <div className="relative w-12 h-12">
          <Image
            alt="logo"
            layout="fill"
            objectFit="cover"
            src={"/clogo.png"}
          />
        </div>
        <span className="font-semibold text-xl">techkareer</span>
      </div>
      <div className="hidden md:flex h-16 rounded-full items-center p-2 border-2 gap-4">
        {navItems.map((item, index) => (
          <Link href={item.href}>
            <div
              key={index}
              className={`h-12 flex gap-1 items-center rounded-full px-3 py-2 cursor-pointer ${
                pathname === item.href
                  ? "bg-clade-primary text-white border-2 border-clade-border"
                  : "bg-transparent text-gray-500"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <BellDot />
        <div className="flex items-center  gap-2 cursor-pointer">
          <div className="w-12 h-12  rounded-full relative">
            <Image
              layout="fill"
              src={"/atlassian.png"}
              alt="profile"
              objectFit="cover"
            />
          </div>
          <ChevronDown />
        </div>
      </div>

      {/* <div className="flex m-auto md:hidden overflow-x-scroll sm:overflow-hidden h-16  sm:justify-center rounded-full items-center p-2 border-2 gap-4">
        {navItems.map((item, index) => (
          <Link href={item.href}>
            <div
              key={index}
              className={`h-12 flex gap-1 items-center rounded-full px-3 py-2 cursor-pointer ${
                pathname === item.href
                  ? "bg-clade-primary text-white border-2 border-clade-border"
                  : "bg-transparent text-gray-500"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  )
}

export default Navbar
