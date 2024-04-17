"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

export default function LoginButton(attr: ButtonHTMLAttributes<HTMLButtonElement>) {

  return(
    <Link href="/login" >
      <button className="bg-green-500 rounded-lg px-4 py-1 text-white" {...attr} onClick={() => signIn()}>
        Entrar
      </button>
    </Link>
  )
}