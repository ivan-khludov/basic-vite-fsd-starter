import { useTranslation } from 'react-i18next';

import { CreateProductDialog } from '@/features/manage-product';
import {
  ProductsSearchField,
  useProductsSearchParams
} from '@/features/products-search';
import {
  ProductsSortSelect,
  useProductsSortParams
} from '@/features/products-sort';
import { useProductsQuery } from '@/entities/product';
import { useSession } from '@/entities/session';
import { canManageProducts, useCurrentUserQuery } from '@/entities/user';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle
} from '@/shared/ui/empty';
import { Spinner } from '@/shared/ui/spinner';

import { ProductCard } from './ProductCard';
import { ProductsPagination } from './ProductsPagination';

export const ProductsCatalog = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useSession();
  const { data: user } = useCurrentUserQuery({ isEnabled: isAuthenticated });
  const { limit, order, skip, sortBy } = useProductsSortParams();
  const { q } = useProductsSearchParams();
  const canWriteCatalog = user ? canManageProducts(user) : false;

  const { data, isPending } = useProductsQuery({
    limit,
    order,
    q,
    skip,
    sortBy
  });

  const items = data?.items ?? [];
  const total = data?.total ?? 0;
  const hasItems = items.length > 0;

  const renderCatalogBody = () => {
    if (isPending) {
      return (
        <div className="flex justify-center py-16">
          <Spinner aria-label={t('common.loading')} />
        </div>
      );
    }

    if (!hasItems) {
      return (
        <Empty className="border">
          <EmptyHeader>
            <EmptyTitle>{t('products.emptyTitle')}</EmptyTitle>
            <EmptyDescription>
              {t('products.emptyDescription')}
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      );
    }

    return (
      <>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((product) => {
            return (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            );
          })}
        </ul>

        <ProductsPagination limit={limit} skip={skip} total={total} />
      </>
    );
  };

  const createProductAction = canWriteCatalog ? <CreateProductDialog /> : null;

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">{t('routes.home')}</h1>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <ProductsSearchField />
        <ProductsSortSelect />
        {createProductAction}
      </div>

      {renderCatalogBody()}
    </section>
  );
};

ProductsCatalog.displayName = 'ProductsCatalog';
