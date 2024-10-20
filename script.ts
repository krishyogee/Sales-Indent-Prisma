import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface SalesIndentData {
  product_id: string;
  customer_id: string;
  customer_delivery_address: string;
  customer_billing_address: string;
  raw_material_supplied: boolean;
  quantity: number;
  currency: string;
  discount_percentage: number;
  total: number;
  payment_mode: string;
  payment_due_date: string;
  expected_delivery_date: string;
  actual_delivery_date?: string | null;
  shipping_mode: string;
  approval_status: string;
}

async function createSalesIndent(data: SalesIndentData) {
  try {
    const newSalesIndent = await prisma.salesIndent.create({
      data: {
        product_id: data.product_id,
        customer_id: data.customer_id,
        customer_delivery_address: data.customer_delivery_address,
        customer_billing_address: data.customer_billing_address,
        raw_material_supplied: data.raw_material_supplied,
        quantity: data.quantity,
        currency: data.currency,
        discount_percentage: data.discount_percentage,
        total: data.total,
        payment_mode: data.payment_mode,
        payment_due_date: new Date(data.payment_due_date),
        expected_delivery_date: new Date(data.expected_delivery_date),
        actual_delivery_date: data.actual_delivery_date
          ? new Date(data.actual_delivery_date)
          : null,
        shipping_mode: data.shipping_mode,
        approval_status: data.approval_status,
      },
    });
    console.log('Sales Indent Created: ', newSalesIndent);
    return newSalesIndent;
  } catch (error) {
    console.error('Error creating sales indent: ', error);
    throw error;
  }
}

//example data
const newSalesIndentData: SalesIndentData = {
  product_id: 'product-uuid',
  customer_id: 'customer-uuid',
  customer_delivery_address: 'delivery-address-uuid',
  customer_billing_address: 'billing-address-uuid',
  raw_material_supplied: true,
  quantity: 100,
  currency: 'USD',
  discount_percentage: 5.0,
  total: 1000.0,
  payment_mode: 'Credit Card',
  payment_due_date: '2024-12-01',
  expected_delivery_date: '2024-12-10',
  actual_delivery_date: null,
  shipping_mode: 'Air',
  approval_status: 'Pending',
};

createSalesIndent(newSalesIndentData).then((result) => {
  console.log('Created Sales Indent:', result);
});
