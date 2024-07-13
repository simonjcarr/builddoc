import { eq } from 'drizzle-orm'
import { db } from '~/server/db'
import { projects, users } from '~/server/db/schema'

export default defineEventHandler(async (event) => {
    const eventData: { userId: string } = getQuery(event)
    if (!eventData.userId) {
        return []
    }
    const userId = JSON.parse(eventData.userId).id
    const result = await db.select().from(projects).leftJoin(users, eq(projects.createdBy, users.id)).where(eq(users.clerkId, userId));
    return result
})