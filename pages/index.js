import { useSession, signIn, signOut } from "next-auth/client"
import absoluteUrl from "next-absolute-url"
import { useEffect } from "react"
import axios from "axios"

export default function Component() {
  const [session] = useSession()

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    try {
      // const { origin } = absoluteUrl(req)

      const { data } = await axios.post(` /api/register`)

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(session)
  if (session) {
    return (
      <>
        <h2>
          Signed in as {session.user.email} <br />
        </h2>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
