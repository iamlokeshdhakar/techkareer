"use client"
import {
  BellDot,
  Briefcase,
  ChevronDown,
  HandCoins,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
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
    <div className="w-full h-24 flex justify-between items-center  px-10 bg-white">
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
      <div className="h-16 rounded-full flex items-center p-2 border-2 gap-4">
        {navItems.map((item, index) => (
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
        ))}
      </div>
      <div className="flex items-center gap-6">
        <BellDot />
        <div className="flex items-center  gap-2 cursor-pointer">
          <div className="w-12 h-12 bg-red-300 rounded-full relative">
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
    </div>
  )
}

export default Navbar
