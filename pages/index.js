import { useSession, signIn, signOut } from "next-auth/client"

export default function Component() {
  const [session] = useSession()

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
