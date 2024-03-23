import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { env } from "@/env"
import { prisma } from "@/prisma"


export const { handlers, auth: baseAuth, signIn, signOut } = NextAuth({
  theme: {
    logo: "/icon-title.png",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET })
  ],
})