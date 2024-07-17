import { asc, desc, eq } from 'drizzle-orm'
import { db } from '~/server/db'
import { documents, projects } from '~/server/db/schema'
export default defineEventHandler(async (event) => {
    const eventData: { projectId: number } = getQuery(event)

    if (!eventData.projectId) {
        return []
    }

    const projectDocuments = await db.query.projects.findFirst({
        where: eq(projects.id, eventData.projectId),
        with: {
            documents: {
                orderBy: asc(documents.name)
            }
        },
    })
    console.log(projectDocuments)
    return projectDocuments
})