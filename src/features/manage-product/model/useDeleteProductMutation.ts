import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { deleteProduct, type Product } from '@/entities/product';
import { ApiError } from '@/shared/api';
import { toast } from '@/shared/ui/toaster';

import { removeProductFromCache } from './sync-product-cache';

export const useDeleteProductMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation<Product, ApiError, number>({
    mutationFn: async (productId: number) => {
      return await deleteProduct(productId);
    },
    onSuccess: (product) => {
      removeProductFromCache(queryClient, product.id);
      toast.success(t('products.toasts.deleted'));
    },
    onError: () => {
      toast.error(t('products.toasts.unknown'));
    }
  });
};
