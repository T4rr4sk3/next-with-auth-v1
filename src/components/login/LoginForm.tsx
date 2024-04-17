"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { authCredentialsId } from "@/lib/auth"
import { FormEventHandler } from "react"
import { signIn } from "next-auth/react"

export default function LoginForm({ logged }: { logged: boolean }) {
  const searchParams = useSearchParams()
  const url = searchParams.get('callbackUrl')
  const definitiveUrl = url || '/'
  const router = useRouter()

  if(logged) router.replace(definitiveUrl)


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const login = e.currentTarget.username.value

    const senha = e.currentTarget.senha.value

    //console.log(login, senha)

    const res = await signIn(authCredentialsId, { login, senha, redirect: false, callbackUrl: url || undefined })

    if(!res?.error) router.push(definitiveUrl) // redirect só funciona no primeiro render, melhor usar hook por ser um client component
  }

  const className = "w-full py-1 px-2 border-b border-b-purple-200"

  return(
    <form className="col-start-8 col-span-4 max-w-lg flex flex-col items-center space-y-6 h-max border p-8 rounded-lg" onSubmit={handleSubmit}>
      <span className="text-lg font-bold"> Entrar </span>

      <p> Entre com seu login e senha na plataforma customizada. </p>

      <input className={className} name="username" maxLength={80} placeholder="login..." autoComplete="username" />

      <input className={className} name="senha" maxLength={20} placeholder="senha..." type="password" autoComplete="current-password" />

      <div className="h-0"></div>

      <button className="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 duration-100 py-2 px-6 w-fit rounded-md text-white font-semibold" type="submit"> Entrar </button>
    </form>
  )
}