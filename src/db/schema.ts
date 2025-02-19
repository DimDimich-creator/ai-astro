import { integer, text, pgTable, timestamp } from "drizzle-orm/pg-core";

export const astroDays = pgTable("astro_days", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});
