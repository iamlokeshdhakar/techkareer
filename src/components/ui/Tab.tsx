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
import JobPreview from "../tabs/JobPreview"
import Applicants from "../tabs/Applicants"
import Matches from "../tabs/Matches"
import Messages from "../tabs/Messages"

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
const tabs = ["Job preview", "Applicants", "Match", "Messages"]
// eslint-disable-next-line
const content = [<JobPreview />, <Applicants />, <Matches />, <Messages />]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <div className="w-full h-16 bg-white border-b-2 px-4 md:px-24 flex items-center gap-2 md:gap-14 overflow-x-scroll md:overflow-hidden">
          {tabs.map((tab, uni) => (
            <div
              key={uni}
              className="min-w-32 h-full flex justify-center items-center flex-col cursor-pointer"
              onClick={() => setActiveTab(uni)}
            >
              <span
                className={`h-full flex justify-center items-center ${
                  activeTab === uni
                    ? "text-clade-primary font-semibold"
                    : "text-clade-text-gray"
                }`}
              >
                {tab}
              </span>
              <div
                className={`w-12 h-[2px] ${
                  activeTab === uni ? "bg-clade-primary" : "bg-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="w-full min-h-screen flex flex-col md:flex-row text-[#4F4F4F]">
        <div className="border-r-2 border-clade-gray w-full">
          {content[activeTab]}
        </div>
        {/* Right Siderbar */}
        <div className="flex-shrink-0 px-8">
          <div className="py-8">
            <div className="flex justify-center items-center gap-3">
              <button className="w-[140px] flex justify-center items-center gap-2 h-12 rounded-lg text-clade-primary font-semibold bg-orange-50 border-[1px] border-clade-primary">
                <Trash2 width={24} height={24} strokeWidth={1.25} />
                Delete Job
              </button>
              <button className="flex justify-center items-center gap-2 w-[140px] h-12 rounded-lg text-white font-semibold bg-clade-primary border-2 border-clade-border">
                <Pencil width={22} height={22} strokeWidth={1.25} />
                Edit Job
              </button>
            </div>
            <div className="w-full mt-8 flex flex-col gap-3">
              {sideMenuItem.map((item, uni) => (
                <>
                  <div
                    key={uni}
                    className="flex justify-between items-center py-2 px-3"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <span className="font-bold text-black">{item.stats}</span>
                  </div>
                  {uni === sideMenuItem.length - 1 ? null : (
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
