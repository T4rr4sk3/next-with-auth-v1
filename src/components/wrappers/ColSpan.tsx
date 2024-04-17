import { PropsWithChildren } from "react"

type Columns = 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12

interface Props extends PropsWithChildren {
  cols?: Columns
  full?: boolean,
  className?: string
}
interface ColSpanProps extends PropsWithChildren { className?: string }

export default function ColSpan({ children, cols = 2, full, className = '' }: Props) {
  return(
    <div className={`grid  col-span-${full ? 'full' : cols} gap-x-2 ${className}`}>
      {children}
    </div>
  )
}

export function ColSpan1({ children, className = '' }: ColSpanProps) {
  return(
    <div className={'col-span-1 ' + className}> {children} </div>
  )
}

export function ColSpan2({ children, className = '' }: ColSpanProps) {
  return(
    <div className={'grid grid-cols-2 col-span-2 gap-x-2 ' + className}> {children} </div>
  )
}

export function ColSpan4({ children, className = '' }: ColSpanProps) {
  return(
    <div className={'grid grid-cols-4 col-span-4 gap-x-2 ' + className}> {children} </div>
  )
}

export function ColSpanFull({ children, className = '' }: ColSpanProps) {
  return(
    <div className={'col-span-full ' + className}> {children} </div>
  )
}