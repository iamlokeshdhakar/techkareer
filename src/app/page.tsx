import JobPreview from "@/components/tabs/JobPreview"
import Tabs from "@/components/ui/Tab"

const tabs = ["Job preview", "Applicants", "Match", "Messages"]
const content = [<JobPreview />, "bb", "cc", "dd"]
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Tabs tabs={tabs} content={content} />
    </div>
  )
}
