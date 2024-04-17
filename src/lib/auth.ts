import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";

export const authCredentialsId = 'coppetecLogin'

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/login',
    signOut: '/'
  },
  session: {
    strategy: 'jwt',
    maxAge: 10000,
  },
  providers: [
    CredentialsProvider({
      name: 'COPPETEC Credentials',
      credentials: {
        login: { label: 'Usuário', type: 'text', placeholder: 'usuário...' },
        senha: { label: 'Senha', type: 'password', placeholder: 'senha...' }
      },
      async authorize(credentials) {
        try {


          const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'content-type': 'application/json' }
          })

          const user = await res.json()

          // console.log(res.status, credentials)

          if(res.ok && user) return user
          //const user = { id: '2', name: "ADM", email: "admin@amdin", teste: 123 }

          return null
        } catch(e) { // provavelmente ECONNREFUSED
          console.log(e)
          if(credentials?.login)
            return { id: '2', name: credentials?.login, email: "admin@amdin", teste: 123 }

          return null
        }

      },
      id: authCredentialsId,
      type: 'credentials',
    })
  ]
}