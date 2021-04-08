import NextAuth from 'next-auth'
import { NowRequest, NowResponse } from "@vercel/node";
import Providers from 'next-auth/providers'

export default (req: NowRequest, res: NowResponse) => NextAuth(req, res, {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],

    database: process.env.MONGODB_URI,
})
