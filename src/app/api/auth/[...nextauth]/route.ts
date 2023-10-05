import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [

        CredentialsProvider({
            name: 'Adorable shop',
            credentials: {
                username: { label: "Username", type: "text", },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials || { username: "", password: "" }

                // Signin mock
                if (username && password) {
                    return {
                        username: username,
                        id: username,
                        email: `${username}@kmitl.ac.th`,
                    }
                }

                return null
            }
        })
    ],
    session: { strategy: "jwt" },
    callbacks: {
        /**
         * When using the Credentials Provider the
         * - user object is the response returned from the authorize callback
         * - profile object is the raw body of the HTTP POST submission.
         */
        async signIn({ user, profile }) {
            return true
        },
        async jwt({ token, account, user }) {

            if (account) {


                token.id = `${user.username}`
                token.email = `${user.username}@kmitl.ac.th`
                token.username = user.username

            }

            return token
        },
        async session({ session, token, user }) {

            session.user = {
                id: token.id,
                email: token.email,
                username: token.username,
            }

            return session
        }
    }
})

export { handler as GET, handler as POST }