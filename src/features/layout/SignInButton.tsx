import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export const SignInButton = () => {
  return <form><Button formAction={async () => {
    "use server";
    await signIn()
  }} >Sign In</Button></form>
}