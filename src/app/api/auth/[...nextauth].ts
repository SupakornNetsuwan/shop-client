import NextAuth from "next-auth"

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [

        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.id = "64070108"
                token.email = "64070108@kmitl.ac.th"
                token.username = "Earth"
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = {
                id: token.id,
                username: token.username,
                email: token.email
            }

            return session
        }
    }
})

export { handler as GET, handler as POST }