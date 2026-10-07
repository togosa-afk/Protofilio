CREATE TABLE "contact_form" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"budget" text NOT NULL,
	"project_details" text NOT NULL,
	"is_read" boolean DEFAULT false NOT NULL
);
