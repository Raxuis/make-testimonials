import Image from "next/image"
import { LoggedInButton } from "../auth/LoggedInButton"
import { Layout } from "@/components/layout"
import { ModeToggle } from "../theme/ModeToggle"
import Link from "next/link"

export const Header = async () => {
  return (
    <header className="w-full border-b border-border">
      <Layout className="flex flex-row items-center gap-4">
        <Link href="/" className="flex-1">
          <Image src="/logo.svg" width={32} height={32} alt="maketestimonials logo" />
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  )
}