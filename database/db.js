import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

export const db = new Database(process.env.DB_FILE);

const schemaPath = join("database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);
