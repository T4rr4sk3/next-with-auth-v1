import { getServerSession } from "next-auth";
import { ColSpanFull } from "../wrappers/ColSpan";
import LogoutButton from "../login/LogoutButton";
import LoginButton from "../login/LoginButton";
import Link from "next/link";

export default async function HomeContainer() {
  const session = await getServerSession()

  const user = session?.user

  return(
    <>
      <ColSpanFull className="h-16 bg-purple-400 flex items-center justify-between px-4 text-white">
        <span className="text-xl font-semibold">
          AUTH_SYSTEM
        </span>

        {user ?
          <div>
            <span> Bem-vindo, {user.name} </span>

            <Link href="/inicio" className="underline"> Início </Link>

            <LogoutButton />
          </div>
          :
          <div>
            <LoginButton />
          </div>
        }
      </ColSpanFull>

      <ColSpanFull> body </ColSpanFull>
    </>
  )
}