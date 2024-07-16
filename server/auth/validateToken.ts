import { verifyToken } from '@clerk/clerk-sdk-node'
import { db } from '~/server/db';
import { H3Event } from 'h3'
import { eq } from 'drizzle-orm';
import { users } from '../db/schema';
export default async function (event: H3Event) {
    const cookies = parseCookies(event)
    const key = process.env.CLERK_SECRET_KEY || '';
    try {
        const payload = await verifyToken(cookies.__session, { secretKey: key });
        const dbUser = await db.query.users.findFirst({
            where: eq(users.clerkId, payload.sub || ''),
        })
        return { clerkId: payload.sub, userId: dbUser?.id }
    } catch (error) {
        throw new Error('Auth Token is not valid')
    }
}