import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // pages: {
  //   signIn: "/user/login",
  //   signIn: "/user/register",
  // },
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user)
      return Promise.resolve(token)
    },
    session: async (session, user) => {
      session.user = user.user
      return Promise.resolve(session)
    },
  },
})
