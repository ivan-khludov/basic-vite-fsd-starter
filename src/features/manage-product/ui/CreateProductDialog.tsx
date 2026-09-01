import { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { type ProductWritePayload } from '@/entities/product';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/ui/dialog';

import { useCreateProductMutation } from '../model/useCreateProductMutation';
import { ProductForm } from './ProductForm';

export const CreateProductDialog = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isPending, mutateAsync } = useCreateProductMutation();

  const handleOpenChange = (isNextOpen: boolean) => {
    if (isPending) {
      return;
    }

    setIsOpen(isNextOpen);
  };

  const handleSubmit = useCallback(
    async (payload: ProductWritePayload) => {
      await mutateAsync(payload);
      setIsOpen(false);
    },
    [mutateAsync]
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>{t('products.add')}</Button>
      </DialogTrigger>

      <DialogContent closeLabel={t('common.cancel')}>
        <DialogHeader>
          <DialogTitle>{t('products.createTitle')}</DialogTitle>

          <DialogDescription>
            {t('products.createDescription')}
          </DialogDescription>
        </DialogHeader>

        <ProductForm
          submitLabel={t('products.add')}
          isSubmitting={isPending}
          onSubmit={handleSubmit}
        />

        <DialogFooter closeLabel={t('common.cancel')} showCloseButton />
      </DialogContent>
    </Dialog>
  );
};

CreateProductDialog.displayName = 'CreateProductDialog';
