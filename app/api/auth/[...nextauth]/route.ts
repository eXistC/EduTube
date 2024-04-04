import bcrypt from "bcrypt";
import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions ={
    adapter: PrismaAdapter(prisma),
    providers: [
        // Use the credentials provider
        CredentialsProvider({
          name: 'credentials',
          // Define the credentials fields
          credentials: {
            email: { label: 'email', type: 'text' },
            password: { label: 'password', type: 'password' }
          },
          // Define the authorization function
          async authorize(credentials) {
            // Check if the credentials are valid
            if (!credentials?.email || !credentials?.password) {
              throw new Error('Invalid credentials');
            }
    
            // Find the user in the database
            const user = await prisma.user.findUnique({
              where: {
                email: credentials.email
              }
            });
    
            // Check if the user exists and has a hashed password
            if (!user || !user?.hashedPassword) {
              throw new Error('Invalid credentials');
            }
    
            // Compare the provided password with the hashed password
            const isCorrectPassword = await bcrypt.compare(
              credentials.password,
              user.hashedPassword
            );
    
            // Check if the password is correct
            if (!isCorrectPassword) {
              throw new Error('Invalid credentials');
            }
    
            // Return the user
            return user;
          }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    // Use JWT for session management
    session: {
        strategy: 'jwt',
    },
    // Define the JWT secret
    // jwt: {
    //     secret: process.env.NEXTAUTH_JWT_SECRET,
    // },
    // Define the NextAuth secret
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};