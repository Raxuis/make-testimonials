import Image from "next/image"
import { LoggedInButton } from "../auth/LoggedInButton"
import { Layout } from "@/components/layout"

export const Header = async () => {
  return (
    <header className="w-full border-b border-border py-1">
      <Layout className="flex items-center gap-4">
        <div className="flex-1">
          <Image src="/logo.svg" width={32} height={32} alt="get-testimonials logo" />
        </div>
        <div className="">
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  )
}