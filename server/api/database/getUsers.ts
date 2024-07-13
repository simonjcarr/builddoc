import { db } from '~/server/db'
import { users } from '~/server/db/schema';
export default defineEventHandler(async () => {
    const userResult = await db.select().from(users)
    console.log("api users", userResult)
    return userResult;
    // return { message: 'Hello, World!'  }
})