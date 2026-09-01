import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import {
  createProduct,
  type Product,
  type ProductWritePayload
} from '@/entities/product';
import type { ApiError } from '@/shared/api';
import { toast } from '@/shared/ui/toaster';

import { upsertProductInCache } from './sync-product-cache';

export const useCreateProductMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation<Product, ApiError, ProductWritePayload>({
    mutationFn: async (payload: ProductWritePayload) => {
      return await createProduct(payload);
    },
    onSuccess: (product) => {
      upsertProductInCache(queryClient, product);
      toast.success(t('products.toasts.created'));
    }
  });
};
