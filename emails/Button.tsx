import {
  Button as ReactEmailButton,
} from '@react-email/components'

import { ComponentPropsWithoutRef } from "react"

export const Button = (props: ComponentPropsWithoutRef<typeof ReactEmailButton>) => {
  return (
    <ReactEmailButton className="inline-block py-3 px-6 mt-4 bg-purple-600 text-white rounded-md text-base" {...props} />
  )
}