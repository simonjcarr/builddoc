import { sql } from "drizzle-orm";
import { varchar } from "drizzle-orm/pg-core";
import { uniqueIndex } from "drizzle-orm/pg-core";
import { index } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { pgTableCreator } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `builddoc_${name}`);

export const users = createTable(
    'user',
    {
        id: serial('id').primaryKey(),
        clerkId: varchar('clerk_id', { length: 256 }).notNull(),
        createAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
        updatedAt: timestamp('updated_at')
    },
    (t) => {
        return {
            clerkIdx: index('clerk_idx').on(t.clerkId),
            uniqueUser: uniqueIndex('id_clerk_idx').on(t.id, t.clerkId)
        }
    }
)

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
