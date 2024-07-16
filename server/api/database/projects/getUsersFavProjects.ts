import { eq } from "drizzle-orm"
import validateToken from "~/server/auth/validateToken"
import { db } from "~/server/db"
import { favProjects, projects } from "~/server/db/schema"

export default defineEventHandler(async (event) => {
    const { userId } = await validateToken(event)
    const usersFavProjects = await db.query.favProjects.findMany({
        with: { project: true },
        where: eq(favProjects.userId, userId || 0)
    })
    return usersFavProjects
})