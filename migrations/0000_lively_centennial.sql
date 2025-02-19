CREATE TABLE "astro_days" (
	"id" integer PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL
);
