import { db } from '@/server/db';
import { users } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
export default defineEventHandler(async (event) => {
    const { data: user } = await readBody(event);
    console.log(user);

    try {
        const usersExists = await db.select().from(users).where(eq(user.id, users.clerkId));
        if (usersExists.length > 0) {
            setResponseStatus(event, 500, 'User does already exists');
            return 'User already exists';
        }
    } catch {
        setResponseStatus(event, 500, 'Failed checking if user exists');
        return;
    }

    try {
        await db.insert(users).values({ clerkId: user.id, email: user.email_addresses[0].email_address })
        return 'ok';
    } catch {
        setResponseStatus(event, 500, 'Failed inserting user');
        return;
    }
})