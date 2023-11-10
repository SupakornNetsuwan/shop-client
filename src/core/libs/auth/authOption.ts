import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"
import axios, { AxiosError } from "axios"
import { JWT } from "next-auth/jwt"

type SignInResponseType = {
    "message": string,
    "status": string,
    "token": string
}

type MyInformationType = {
    _id: string
    email: string
    password: string
    has_shop: boolean
    updated_at: number
    created_at: number
    info: {
        first_name: string
        last_name: string
        address: {
            province: string
            tambon: string
            amphur: string
            postalcode: number
            more: string
        }
    }
}




const url = process.env.NEXT_PUBLIC_USER_SERVICE_URL;

if (!url) throw new Error("NEXT_PUBLIC_USER_SERVICE is not defined");


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

                try {
                    // Sign In
                    const signInResponse = await axios.post<SignInResponseType>(`${url}/api/login`, {
                        email,
                        password,
                    })

                    const signInData = signInResponse.data

                    // Get user information
                    const myInformationResponse = await axios.get<MyInformationType>(`${url}/api/me`, {
                        headers: {
                            'Authorization': `Bearer ${signInData.token}`
                        }
                    })

                    const myInformationData = myInformationResponse.data

                    return {
                        id: myInformationData._id,
                        username: `${myInformationData.info.first_name} ${myInformationData.info.last_name}`,
                        email: myInformationData.email,
                        token: signInData.token,
                        name: "",
                        image: "",
                    }
                } catch (error) {
                    if (error instanceof AxiosError) throw error.response?.data
                    if (error instanceof Error) throw error
                    if (typeof error === "string") throw new Error(error)
                    throw new Error("Unknown error while Logging in")
                }
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
        async jwt({ account, token, user }) {

            if (account) {
                token.id = user.id
                token.email = user.email + ""
                token.username = user.username
                token.token = user.token
            }

            return token
        },
        async session({ session, token, user }) {

            session.user = {
                token: token.token,
                id: token.id,
                email: token.email,
                username: token.username,
            }

            return session
        }
    }
} satisfies NextAuthOptions

export default authOption