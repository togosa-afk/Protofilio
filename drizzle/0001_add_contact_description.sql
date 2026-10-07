ALTER TABLE "contact_form" ADD COLUMN "description" text DEFAULT '' NOT NULL;
ALTER TABLE "contact_form" ALTER COLUMN "description" DROP DEFAULT;