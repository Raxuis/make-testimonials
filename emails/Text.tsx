import {
  Text as ReactEmailText,
} from '@react-email/components'

import { ComponentPropsWithoutRef } from "react"

export const Text = (props: ComponentPropsWithoutRef<typeof ReactEmailText>) => {
  return (
    <ReactEmailText className="text-base leading-6" {...props} />
  )
}