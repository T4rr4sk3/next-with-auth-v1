"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return(
    <button className="bg-red-400 rounded-lg px-2 text-white" onClick={() => { signOut() }}>
      SAIR
    </button>
  )
}