import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core";

export const contactForm = pgTable("contact_form", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  budget: text("budget").notNull(),
  projectDetails: text("project_details").notNull(),
  description: text("description").notNull(),
  isRead: boolean("is_read").default(false).notNull(),
});

export type ContactForm = InferSelectModel<typeof contactForm>;
export type NewContactForm = InferInsertModel<typeof contactForm>;