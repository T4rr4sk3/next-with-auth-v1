import { ColSpanFull } from "@/components/wrappers/ColSpan";
import { PropsWithChildren } from "react";

export default function InicioLayout({ children }: PropsWithChildren) {
  return(
    <ColSpanFull className="bg-blue-100 h-screen grid grid-cols-18">
      {children}
    </ColSpanFull>
  )
}