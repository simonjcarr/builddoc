import { and, asc, eq } from 'drizzle-orm'
import validateToken from '~/server/auth/validateToken'
import { db } from '~/server/db'
import { favProjects, projects, users } from '~/server/db/schema'

export default defineEventHandler(async (event) => {
    const { userId } = await validateToken(event)
    
    const result = await db.query.projects.findMany({
        with: { favProjects: true },
        where: eq(projects.createdBy, userId || 0),
        orderBy: [asc(projects.name)]
    })
    return result
})