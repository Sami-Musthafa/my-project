import { z } from 'zod';

export const SaleDataSchema = z.object({
  id: z.string(),
  quantity: z.coerce
    .number()
    .min(0.1, { message: 'Quantity must be greater than 0' }),
  cost: z.coerce.number().min(1, { message: 'Cost must be greater than 1' }),
  customerName: z
    .string()
    .min(3, { message: 'Customer name must be at least 3 characters' }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const CreateSaleDataSchema = SaleDataSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type ISaleData = z.infer<typeof SaleDataSchema>;
