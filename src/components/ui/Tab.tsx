"use client"
import {
  Eye,
  MessageSquare,
  Pencil,
  Trash2,
  UserCheck,
  Users,
} from "lucide-react"
import React, { useState } from "react"

interface TabsProps {
  tabs: any[]
  content: any[]
}

const sideMenuItem = [
  {
    title: "Applicants",
    icon: <Users width={22} height={22} strokeWidth={1.5} />,
    stats: "400",
  },
  {
    title: "Matches",
    icon: <UserCheck width={22} height={22} strokeWidth={1.5} />,
    stats: "100",
  },
  {
    title: "Messages",
    icon: <MessageSquare width={22} height={22} strokeWidth={1.5} />,
    stats: "140",
  },
  {
    title: "Views",
    icon: <Eye width={22} height={22} strokeWidth={1.5} />,
    stats: "800",
  },
]

const Tabs = ({ tabs, content }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        <div className="w-full h-16 bg-white border-y-2 px-24 flex items-center gap-14">
          {tabs.map((tab, index) => (
            <div
              className="min-w-12 h-full flex justify-center items-center flex-col cursor-pointer"
              onClick={() => setActiveTab(index)}
            >
              <span
                className={`h-full flex justify-center items-center ${
                  activeTab === index
                    ? "text-clade-primary font-semibold"
                    : "text-clade-text-gray"
                }`}
              >
                {tab}
              </span>
              <div
                className={`w-12 h-[2px] ${
                  activeTab === index ? "bg-clade-primary" : "bg-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full min-h-screen pl-24 flex text-[#4F4F4F]">
        <div className="w-full h-screen border-r-2 border-clade-gray  py-8">
          {content[activeTab]}
        </div>
        <div className="w-[400px] flex-shrink-0 h-screen border-l-2 border-clade-gray px-8">
          <div className="py-8">
            <div className="flex justify-center items-center gap-3">
              <button className="flex justify-center items-center gap-2 h-12 rounded-lg text-clade-primary font-semibold bg-orange-50  w-1/2">
                <Trash2 width={24} height={24} strokeWidth={1.25} />
                Delete Job
              </button>
              <button className="flex justify-center items-center gap-2 w-1/2 h-12 rounded-lg text-white font-semibold bg-clade-primary">
                <Pencil width={22} height={22} strokeWidth={1.25} />
                Edit Job
              </button>
            </div>
            <div className="w-full mt-8 flex flex-col gap-3">
              {sideMenuItem.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 px-3"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <span className="font-bold text-black">{item.stats}</span>
                  </div>
                  {index === sideMenuItem.length - 1 ? null : (
                    <hr className="border" />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
