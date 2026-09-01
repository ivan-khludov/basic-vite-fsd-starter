import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import {
  updateProduct,
  type Product,
  type ProductWritePayload
} from '@/entities/product';
import { ApiError } from '@/shared/api';
import { toast } from '@/shared/ui/toaster';

import { upsertProductInCache } from './sync-product-cache';

interface UpdateProductVariables {
  payload: ProductWritePayload;
  productId: number;
}

export const useUpdateProductMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation<Product, ApiError, UpdateProductVariables>({
    mutationFn: async ({ payload, productId }: UpdateProductVariables) => {
      return await updateProduct(productId, payload);
    },
    onSuccess: (product) => {
      upsertProductInCache(queryClient, product);
      toast.success(t('products.toasts.updated'));
    }
  });
};
