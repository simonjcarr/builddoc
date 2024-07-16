import { eq } from 'drizzle-orm'
import { db } from '~/server/db'
import { projects, users } from '~/server/db/schema'
import {  H3Event } from 'h3'
import validateToken from '~/server/auth/validateToken'






export default defineEventHandler(async (event) => {
    const { clerkId, userId } = await validateToken(event)
    console.log(userId)
    const body = await readBody(event)

    const existingProject = await db.insert(projects).values({
        createdBy: userId,
        name: body.project.name,
        description: body.project.description,
    })
    return 'ok'
})