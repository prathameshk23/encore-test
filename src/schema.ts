import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const todoTable = pgTable("kuku", {
  id: text(),
  todo: varchar(),
  description: varchar(),
});
