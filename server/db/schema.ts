import { relations, sql } from "drizzle-orm";
import { integer, text, varchar } from "drizzle-orm/pg-core";
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
        email: varchar('email', { length: 256 }).unique(),
        createAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
        updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
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

export const usersRelations = relations(users, ({ many }) => ({
    createdProjects: many(projects)
}))

export const projects = createTable(
    'project',
    {
        id: serial('id').primaryKey(),
        createdBy: integer('created_by'),
        name: varchar('name', { length: 256 }).unique(),
        description: text('description'),
        createAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
        updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
    },
    (t) => {
        return {
            createdByIdx: index('created_by_idx').on(t.createdBy),
            nameIdx: index('name_idx').on(t.name)
        }
    }
)

export type InsertProject = typeof projects.$inferInsert;
export type SelectProject = typeof projects.$inferSelect;

export const projectsRelations = relations(projects, ({ one }) => ({
    createdBy: one(users, {
        fields: [projects.createdBy],
        references: [users.id]
    })
}))

export const favProjects = createTable(
    'fav_project',
    {
        id: serial('id').primaryKey(),
        userId: integer('user_id'),
        projectId: integer('project_id'),
        createAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
        updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
    }
)

export const favProjectsRelations = relations(favProjects, ({ one }) => ({
    user: one(users, {
        fields: [favProjects.userId],
        references: [users.id]
    }),
    project: one(projects, {
        fields: [favProjects.projectId],
        references: [projects.id]
    })
}))

export type InsertFavProject = typeof favProjects.$inferInsert;
export type SelectFavProject = typeof favProjects.$inferSelect;

export const documents = createTable(
    'document',
    {
        id: serial('id').primaryKey(),
        name: varchar('name', { length: 256 }),
        description: text('description'),
        content: text('content'),
        createdBy: integer('created_by').notNull(),
        createAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
        updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
    }
)

export const documentsRelations = relations(documents, ({ one }) => ({
    createdBy: one(users, {
        fields: [documents.createdBy],
        references: [users.id]
    })
}))

export type InsertDocument = typeof documents.$inferInsert;
export type SelectDocument = typeof documents.$inferSelect;
