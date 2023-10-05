import NextAuth, { type DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth" {

    interface DefaultUser {
        id: string;
        username: string
        email: string;
    }

    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */

    interface Session {
        user: {
            id: string;
            username: string
            email: string
        }
    }
}

declare module "next-auth/jwt" {
   
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        id: string;
        username: string;
        email: string;
    }
}