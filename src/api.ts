import { api } from "encore.dev/api";
import { db } from "./db";
import { todoTable } from "./schema";

interface TodoRequest {
  id: string;
  todo: string;
  description: string;
}

interface HelloResponse {
  message: string;
}

export const add = api(
  { expose: true, method: "POST", path: "/todo" },
  async ({ id, todo, description }: TodoRequest): Promise<HelloResponse> => {
    console.log("Adding todo");
    console.log(id, todo, description);
    const result = await db.insert(todoTable).values({
      id,
      todo,
      description,
    });
    console.log(result);
    return { message: "Todo added" };
  },
);
