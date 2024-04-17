//import { api_url } from "@/lib/env";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Fragment, PropsWithChildren } from "react";

const verifyURL = async (url: string) => {
  return 200 // se tiver uma API para verificar, use-a
  // return fetch(api_url + '/get-functionality?url=' + encodeURIComponent(url))
  // .then(res => res.status)
  // .catch(() => 500)
}


interface PrivatePageProps extends PropsWithChildren {
  /** The page final url */
  url: string
}
export default async function PrivatePage({ url, children }: PrivatePageProps) {
  const session = await getServerSession()

  if(!session?.user) redirect('/login') //?callbackUrl='+ encodeURIComponent(url))

  const status = await verifyURL(url)

  //console.log(status) // pode ter status também para não autorizado

  if(status === 404) redirect('/not-found')

  if(status === 200) {
    return(
      <Fragment>
        {children}
      </Fragment>
    )
  }

  redirect('/maintainence')

}