import { z } from "zod";

export const projectDetailsZodEnum = z.enum([
  "Full-Stack Web App",
  "React Native Mobile",
  "GraphQL Architecture",
  "CI/CD & DevOps",
  "Consultation",
], {
  message: "Invalid project details",
});


export const contactFormZodSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(120),
  email: z.string().trim().email({ message: "Invalid email address" }).max(320),
  budget: z.string().trim().min(1, { message: "Budget is required" }).max(100),
  projectDetails: projectDetailsZodEnum,
  description: z.string().trim().min(1, { message: "Description is required" }).max(1000),
});

export type ContactFormZodSchema = z.infer<typeof contactFormZodSchema>;

export type ContactFormActionState = {
  success: boolean;
  warning?: string;
  errors: Partial<
    Record<keyof ContactFormZodSchema | "form", string[]>
  >;
};