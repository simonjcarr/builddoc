import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import dotenv from 'dotenv';
import * as schema from './schema';
import path from 'path'

dotenv.config({ path: '../../.env' });

export const db = drizzle(sql, { schema });
