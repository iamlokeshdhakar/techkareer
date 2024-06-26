import Applicants from "@/components/tabs/Applicants"
import JobPreview from "@/components/tabs/JobPreview"
import Matches from "@/components/tabs/Matches"
import Messages from "@/components/tabs/Messages"
import Tabs from "@/components/ui/Tab"

const tabs = ["Job preview", "Applicants", "Match", "Messages"]
const content = [<JobPreview />, <Applicants />, <Matches />, <Messages />]
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Tabs tabs={tabs} content={content} />
    </div>
  )
}
