import { and, eq } from 'drizzle-orm'
import { db } from '~/server/db'
import { favProjects, projects, users } from '~/server/db/schema'

export default defineEventHandler(async (event) => {
    const eventData: { userId: string } = getQuery(event)
    
    if (!eventData.userId) {
        return []
    }
    const userId = JSON.parse(eventData.userId).id
    const result = await db.select().from(projects)
        .leftJoin(users, eq(projects.createdBy, users.id))
        .leftJoin(favProjects, and(eq(projects.id, favProjects.projectId), eq(favProjects.userId, users.id)))
        .where(eq(users.clerkId, userId))
        .orderBy(projects.name)
    return result
})