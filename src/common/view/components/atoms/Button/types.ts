import {  ReactNode } from "react"

export type ButtonStyleType = 'primary' | 'secondary' | 'tertiary' | 'disabled'

export type ButtonPropsType = {
  children: ReactNode
  buttonStyle?: ButtonStyleType,
  href?: string;
}
