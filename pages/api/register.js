import { getSession } from "next-auth/client"

import User from "../../models/userModel"

export default async (req, res) => {
  const session = await getSession({ req })

  console.log("session", session.user)

  if (session) {
    const user = await User.create({
      socialId: session.user.id,
      name: session.user.name,
      email: session.user.email,
      password: hashPassword || "",
    })
    res.json({ user })
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    })
  }
}
