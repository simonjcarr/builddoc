import { db } from '@/server/db';
import { users } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
export default defineEventHandler(async (event) => {
    const { data: user } = await readBody(event);
    console.log(user);
    console.log("Going to insert", { clerkId: user.id, email: user.email_addresses[0].email_address })
    
    // Check that the user exists in the database
    try {
        const usersExists = await db.select().from(users).where(eq(user.id, users.clerkId));
        if (usersExists.length < 1) {
            setResponseStatus(event, 500, 'User does not exist');
            return;
        }
    } catch {
        setResponseStatus(event, 500, 'Failed checking if user exists');
        return;
    }


    // Update the user's email in the database
    try {
        const updatedUserId: { updatedId: number }[] = await db.update(users)
            .set({ updatedAt: new Date(), email: user.email_addresses[0].email_address })
            .where(eq(user.id, users.clerkId))
            .returning({ updatedId: users.id });
        if (updatedUserId.length < 1) {
            setResponseStatus(event, 500, 'Failed updating the user');
            return;
        }
        return 'ok';
    } catch (error) {
        setResponseStatus(event, 500, 'Failed updating the user')
        console.log("Error updating the users table")
    }
   
})