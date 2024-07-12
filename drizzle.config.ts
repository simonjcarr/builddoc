import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
    schema: './server/db/schema.ts',
    out: './server/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.POSTGRES_URL!,
    },
});
