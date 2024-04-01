"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PropsWithChildren } from "react"
import { signOutAction } from "./auth.action";
import { LogOut, Square } from "lucide-react";
import Link from "next/link";

export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {props.children}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/products" className="w-full">
            <Square size={16} className="mr-2" />
            Products
          </Link>
        </DropdownMenuItem>
        <form>
          <DropdownMenuItem onClick={() => {
            signOutAction()
          }}>
            <LogOut size={16} className="mr-2" />
            Logout
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}