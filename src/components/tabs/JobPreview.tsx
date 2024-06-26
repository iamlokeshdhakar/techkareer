import { Coins, Dot, MapPin } from "lucide-react"
import Image from "next/image"

const jobData = {
  skills: [
    { title: "Figma", icon: "/figma.png" },
    { title: "Adobe Illustrator", icon: "/adobe.png" },
    { title: "Adobe XD", icon: "/xd.png" },
  ],
}
const JobPreview = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-7 border-b-2 border-clade-gray px-4 md:pl-24 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 ">
          <h1 className="text-4xl font-bold text-[#3D3D3D]">
            Senior Product Designer
          </h1>
          <div className="flex items-center gap-6">
            <span className="w-fit flex items-center gap-2 justify-center text-clade-text-gray">
              <div className="w-1 h-1 rounded-full bg-clade-text-gray"></div>
              posted 2 days ago
            </span>
            <span className="w-fit flex items-center justify-center gap-1 px-2 rounded-full text-green-800 text-sm bg-green-100 border-[1px] border-green-400 font-medium">
              <div className="w-1 h-1 rounded-full bg-green-800"></div>
              Open
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-medium">
            <MapPin width={24} height={24} /> <span>Delaware, USA</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-clade-text-gray"></div>
          <div className="flex items-center gap-2 font-medium">
            <Coins width={24} height={24} /> <span>$300k-$400k</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-12 border-b-2 border-clade-gray px-4 md:pl-24 py-10">
        <div className="flex flex-col gap-2 md:w-52">
          <span className="text-[14px]">Skill Required</span>
          <div className="flex flex-wrap sm:flex-nowrap md:flex-col gap-2">
            {jobData.skills.map((skill, index) => (
              <div
                key={index}
                className="flex px-1 py-[2px] border-2 gap-2 rounded-lg w-fit text-[12px] items-center justify-center font-medium"
              >
                <div className="w-5 h-5 relative rounded-md overflow-hidden">
                  <Image
                    src={skill.icon}
                    alt="skills"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-52 ">
          <span className="text-[14px]">Preferred Language</span>
          <span className="text-black font-medium">English</span>
        </div>
        <div className="flex flex-col gap-2 md:w-52 ">
          <span className="text-[14px]">Type</span>
          <span className="text-black font-medium">Full Time</span>
        </div>
        <div className="flex flex-col gap-2 w-52 ">
          <span className="text-[14px]">Years of Experience</span>
          <span className="text-black font-medium">3+ Years of Experience</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-b-2 border-clade-gray px-4 md:pl-24 py-10 text-black font-medium">
        <h4 className="font-medium text-lg text-[#6E6D6D]">About the job</h4>
        <ol className="list-decimal pl-4">
          <li> Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <div>
          <h4>Benefits:</h4>
          <ul className="list-disc pl-8">
            <li>Health insurance</li>
            <li>Provident fund</li>
          </ul>
        </div>
        <div>
          <h4>Schedule:</h4>
          <ul className="list-disc  pl-8">
            <li>Day shift</li>
          </ul>
        </div>
        <div>
          <h4>Supplemental Pay Types:</h4>
          <ul className="list-disc  pl-8">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
        </div>
        <h4>Work Location: In Person</h4>
      </div>
      <div className="flex flex-col gap-7 border-b-2 border-clade-gray px-4 md:pl-24 py-10">
        <div className="w-full flex items-center">
          <div className="flex items-center justify-center  gap-2">
            <div className="relative w-12 h-12">
              <Image
                alt="logo"
                layout="fill"
                objectFit="cover"
                src={"/atlassian.png"}
              />
            </div>
            <span className="font-medium text-xl">Atlassian</span>
          </div>
        </div>
        <div className="w-full flex flex-wrap sm:flex-nowrap">
          <div className="w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[14px]">Company size</span>
              <span className="text-black font-medium">1k-2k Employees</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px]">Sector</span>
              <span className="text-black font-medium">
                Information Techbology, Infrastructure
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px]">Founded In</span>
              <span className="text-black font-medium">2019</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[14px]">Type</span>
              <span className="text-black font-medium">Private</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px]">Funding</span>
              <span className="text-black font-medium">Bootstraped</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px]">Founded By</span>
              <span className="text-black font-medium">
                Scott Farquhar, Mike Cannon Brookes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobPreview
