import { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { type Product } from '@/entities/product';
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

import { useDeleteProductMutation } from '../model/useDeleteProductMutation';

interface DeleteProductDialogProps {
  product: Product;
  className?: string;
  onDeleted?: () => void;
}

export const DeleteProductDialog = ({
  product,
  className,
  onDeleted
}: DeleteProductDialogProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isPending, mutateAsync } = useDeleteProductMutation();

  const handleOpenChange = (isNextOpen: boolean) => {
    if (isPending) {
      return;
    }

    setIsOpen(isNextOpen);
  };

  const handleConfirm = useCallback(async () => {
    try {
      await mutateAsync(product.id);
      setIsOpen(false);
      onDeleted?.();
    } catch {
      // The mutation surfaces a toast; keep the dialog open to retry.
    }
  }, [mutateAsync, onDeleted, product.id]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="destructive" className={className}>
          {t('products.delete')}
        </Button>
      </DialogTrigger>

      <DialogContent closeLabel={t('common.cancel')}>
        <DialogHeader>
          <DialogTitle>{t('products.deleteTitle')}</DialogTitle>

          <DialogDescription>
            {t('products.deleteDescription', { title: product.title })}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter closeLabel={t('common.cancel')} showCloseButton>
          <Button
            variant="destructive"
            isLoading={isPending}
            onClick={handleConfirm}
          >
            {t('products.deleteConfirm')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

DeleteProductDialog.displayName = 'DeleteProductDialog';
