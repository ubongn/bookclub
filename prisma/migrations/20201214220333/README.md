# Migration `20201214220333`

This migration has been generated by Eric at 12/14/2020, 11:03:33 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "users" ADD COLUMN     "password" TEXT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201204214310..20201214220333
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 model Books {
   id        Int     @default(autoincrement()) @id
@@ -29,8 +29,9 @@
 model User {
   id            Int       @default(autoincrement()) @id
   name          String?
+  password      String?
   email         String?   @unique
   emailVerified DateTime? @map(name: "email_verified")
   image         String?
   type          String   @default("NORMAL")
```


