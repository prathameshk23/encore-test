import { db } from "./db";
import { InsertTodo, todo } from "./schema";

export async function createTodo(data: InsertTodo) {
  await db.insert(todo).values(data);
}
