import { getSession } from "next-auth/client"

export default async (req, res) => {
  const session = await getSession({ req })

  console.log("session", session.user)

  if (session) {
    res.json({ user: session?.user })
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    })
  }
}
