-- CreateTable
CREATE TABLE "SalesIndent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "customer_delivery_address" TEXT NOT NULL,
    "customer_billing_address" TEXT NOT NULL,
    "raw_material_supplied" BOOLEAN NOT NULL DEFAULT true,
    "quantity" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "discount_percentage" REAL NOT NULL,
    "total" REAL NOT NULL,
    "payment_mode" TEXT NOT NULL,
    "payment_due_date" DATETIME NOT NULL,
    "expected_delivery_date" DATETIME NOT NULL,
    "actual_delivery_date" DATETIME,
    "shipping_mode" TEXT NOT NULL,
    "approval_status" TEXT NOT NULL,
    "created_date_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date_time" DATETIME NOT NULL
);
