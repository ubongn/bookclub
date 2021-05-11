import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),


    // Providers.Credentials({
    //   // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: "Email & Password",
    //   // The credentials is used to generate a suitable form on the sign in page.
    //   // You can specify whatever fields you are expecting to be submitted.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   credentials: {
    //     username: { label: "Email", type: "text", placeholder: "something@s" },
    //     password: {  label: "Password", type: "password" }
    //   },
    //   authorize: async (credentials) => {
    //     const user = (credentials) => {
    //       console.log(credentials)
    //       // You need to provide your own logic here that takes the credentials
    //       // submitted and returns either a object representing a user or value
    //       // that is false/null if the credentials are invalid.
    //       // e.g. return 
    //       return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //     }
    //     if (user) {
    //       // Any user object returned here will be saved in the JSON Web Token
    //       return Promise.resolve(user)
    //     } else {
    //       return Promise.resolve(null)
    //     }
    //   }
    // }), 
    // Providers.Email({
    //   server: {
    //     host: process.env.SMTP_HOST,
    //     port: Number(process.env.SMTP_PORT),
    //     auth: {
    //       user: process.env.SMTP_USER,
    //       pass: process.env.SMTP_PASSWORD,
    //     },
    //   },
    //   from: process.env.SMTP_FROM,
    // }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
  session: { jwt: true }
};
