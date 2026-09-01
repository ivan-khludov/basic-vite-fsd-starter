import { type TFunction } from 'i18next';
import { z } from 'zod';

export const createProductFormSchema = (t: TFunction) => {
  return z.object({
    brand: z.string().trim(),
    price: z
      .string()
      .trim()
      .min(1, { message: t('products.validation.priceRequired') })
      .refine(
        (value) => {
          const parsed = Number(value);

          return Number.isFinite(parsed) && parsed > 0;
        },
        { message: t('products.validation.pricePositive') }
      ),
    title: z
      .string()
      .trim()
      .min(1, { message: t('products.validation.titleRequired') })
  });
};

export type ProductFormValues = z.infer<
  ReturnType<typeof createProductFormSchema>
>;
