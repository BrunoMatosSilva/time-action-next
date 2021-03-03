import NextAuth from 'next-auth'
import { NowRequest, NowResponse } from "@vercel/node";
import Providers from 'next-auth/providers'

export default (req: NowRequest, res: NowResponse) => NextAuth(req, res, {
    // Configure one or more authentication providers
    providers: [
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN
        })
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.MONGODB_URI,
})
