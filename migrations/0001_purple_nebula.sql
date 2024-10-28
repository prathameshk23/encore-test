CREATE TABLE IF NOT EXISTS "todo" (
	"id" serial NOT NULL,
	"todo" varchar,
	"description" varchar
);
--> statement-breakpoint
DROP TABLE "users";