import AccountChecked from "@/components/icons/accountChecked";
import LogoutButton from "@/components/login/LogoutButton";
import PrivatePage from "@/components/wrappers/PrivatePage";
import { getServerSession } from "next-auth";

export default async function InicioPage() {
  const session = await getServerSession()

  return(
    <PrivatePage url="/inicio">
      <nav className="h-16 col-span-full bg-cyan-400 border-b border-b-purple-600 flex justify-between items-center px-8">
        <div className="grid grid-flow-col items-center gap-x-2">
          <div className="rounded-full p-2 bg-white">
            <AccountChecked />
          </div>

          <span className="font-bold text-white"> {session?.user?.name} </span>
        </div>

        <div>
          <LogoutButton />
        </div>
      </nav>
    </PrivatePage>
  )
}