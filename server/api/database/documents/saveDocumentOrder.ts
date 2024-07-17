import { eq } from "drizzle-orm"
import validateToken from "~/server/auth/validateToken"
import { db } from "~/server/db"
import { documents } from "~/server/db/schema"

export default defineEventHandler(async (event) => {
    const { userId } = await validateToken(event)

    try {
        const body = await readBody(event)

        body.documents.forEach(async (document: any, index: number) => {
            return await db.update(documents).set({ order: index }).where(eq(documents.id, document.id))
        })

        return 'ok'
    } catch (error) {
        return { status: 500, body: "error updating document order" }
    }
})