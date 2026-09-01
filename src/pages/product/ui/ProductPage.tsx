import { useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router';

import {
  DeleteProductDialog,
  ProductForm,
  useUpdateProductMutation
} from '@/features/manage-product';
import { useProductQuery, type ProductWritePayload } from '@/entities/product';
import { useSession } from '@/entities/session';
import { canManageProducts, useCurrentUserQuery } from '@/entities/user';
import { ApiError } from '@/shared/api';
import { ROUTES_CONFIG } from '@/shared/config';
import { AspectRatio } from '@/shared/ui/aspect-ratio';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Spinner } from '@/shared/ui/spinner';

import { ProductNotFound } from './ProductNotFound';

const isNotFoundError = (error: unknown): boolean => {
  return error instanceof ApiError && error.status === 404;
};

export const ProductPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated } = useSession();
  const { data: user } = useCurrentUserQuery({ isEnabled: isAuthenticated });
  const { productId: productIdParam } = useParams();
  const productId = Number(productIdParam);
  const isValidProductId = Number.isFinite(productId) && productId > 0;
  const canWriteCatalog = user ? canManageProducts(user) : false;

  const { data: product, error, isPending } = useProductQuery(productId);
  const { isPending: isUpdating, mutateAsync } = useUpdateProductMutation();

  const defaultValues = useMemo(() => {
    if (!product) {
      return undefined;
    }

    return {
      brand: product.brand,
      price: String(product.price),
      title: product.title
    };
  }, [product]);

  const handleSubmit = useCallback(
    async (payload: ProductWritePayload) => {
      await mutateAsync({ payload, productId });
    },
    [mutateAsync, productId]
  );

  const handleDeleted = useCallback(() => {
    void navigate(ROUTES_CONFIG.HOME.href, { replace: true });
  }, [navigate]);

  if (!isValidProductId || isNotFoundError(error)) {
    return <ProductNotFound />;
  }

  if (isPending || !product || !defaultValues) {
    return (
      <div className="flex justify-center py-16">
        <Spinner aria-label={t('common.loading')} />
      </div>
    );
  }

  const thumbnail = product.thumbnailUrl ? (
    <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl bg-muted">
      <img
        src={product.thumbnailUrl}
        alt={product.title}
        className="size-full object-cover"
      />
    </AspectRatio>
  ) : null;

  const writeSection = canWriteCatalog ? (
    <>
      <p className="text-sm text-muted-foreground">
        {t('products.writeDescription')}
      </p>

      <ProductForm
        defaultValues={defaultValues}
        submitLabel={t('products.save')}
        isSubmitting={isUpdating}
        onSubmit={handleSubmit}
      />

      <DeleteProductDialog product={product} onDeleted={handleDeleted} />
    </>
  ) : null;

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-6">
      <Button asChild variant="outline" className="self-start">
        <Link to={ROUTES_CONFIG.HOME.href}>{t('errors.goHome')}</Link>
      </Button>

      {thumbnail}

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">{product.title}</h1>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            {t('products.price', { price: product.price })}
          </Badge>

          <Badge variant="outline">
            {t('products.rating', { rating: product.rating })}
          </Badge>
        </div>
      </div>

      {writeSection}
    </section>
  );
};

ProductPage.displayName = 'ProductPage';
