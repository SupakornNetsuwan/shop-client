import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"

const authOption = {
    // Configure one or more authentication providers
    providers: [

        CredentialsProvider({
            name: 'Adorable shop',
            credentials: {
                email: { label: "Email", type: "email", },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials || { email: "", password: "" }

                // Signin mock
                if (email && password) {
                    return {
                        username: "username",
                        id: "1",
                        email: `${email}@kmitl.ac.th`,
                    }
                }

                return null
            }
        })
    ],
    session: { strategy: "jwt" },

    callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
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
} satisfies NextAuthOptions

export default authOption