import { and, eq } from 'drizzle-orm'
import validateToken from '~/server/auth/validateToken'
import { db } from '~/server/db'
import { favProjects } from '~/server/db/schema'

export default defineEventHandler(async (event) => {
    validateToken(event)
    const body = await readBody(event)
    const existingProject = await db.select().from(favProjects).where(and(eq(favProjects.userId, body.userId), eq(favProjects.projectId, body.projectId)))
    const result = await db.delete(favProjects).where(and(eq(favProjects.userId, body.userId), eq(favProjects.projectId, body.projectId)))
    if (result.rowCount == 0) {
        //Insert Record
        const result = await db.insert(favProjects).values({
            userId: body.userId,
            projectId: body.projectId,
            updatedAt: new Date(),
        })
    }
    return 'ok'
})