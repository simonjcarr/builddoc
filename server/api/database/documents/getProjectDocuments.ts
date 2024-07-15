import { eq } from 'drizzle-orm'
import { db } from '~/server/db'
import { projects } from '~/server/db/schema'
export default defineEventHandler(async (event) => {
    const eventData: { projectId: number } = getQuery(event)

    if (!eventData.projectId) {
        return []
    }

    const projectDocuments = await db.query.projects.findFirst({
        where: eq(projects.id, eventData.projectId),
        with: {
            documents: true
        }
    })
    return projectDocuments
})