import LoginForm from "@/components/login/LoginForm"
import { ColSpanFull } from "@/components/wrappers/ColSpan"
import { getServerSession } from "next-auth"
//import { signOut } from "next-auth/react"
import { redirect,  } from "next/navigation"

export default async function LoginPage() {
  const session = await getServerSession()

  const user = session?.user

  //console.log("islogged as " + JSON.stringify(user))

  if(user) redirect("/")

  return(
    <ColSpanFull className="grid grid-cols-18 gap-y-20">
      <div className="col-start-6 col-span-8 pt-12">
        <h3 className="bg-purple-600 text-white text-center rounded-xl shadow-md">
          Auth System Test (AST)
        </h3>
      </div>

      <LoginForm logged={Boolean(user)} />
    </ColSpanFull>
  )
}