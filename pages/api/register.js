import { getSession } from "next-auth/client"
import connectDB from "../../db"
import User from "../../models/userModel"

connectDB()

export default async (req, res) => {
  try {
    const session = await getSession({ req })

    console.log("session", session.user)

    const socialUser = session.user

    if (session) {
      console.log("social", socialUser)
      const user = await User.create({
        socialId: socialUser.id,
        name: socialUser.name,
        email: socialUser.email,
        password: socialUser?.hashPassword || "",
      })
      res.json({ user })
    } else {
      res.send({
        error:
          "You must be sign in to view the protected content on this page.",
      })
    }
  } catch (error) {
    console.log(error)
  }
}
