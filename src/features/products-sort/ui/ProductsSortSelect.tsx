import { useTranslation } from 'react-i18next';

import { type ProductsSortBy, type SortOrder } from '@/entities/product';
import { Label } from '@/shared/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/ui/select';

import { useProductsSortParams } from '../model/useProductsSortParams';

const SORT_OPTIONS = [
  { labelKey: 'products.sort.priceAsc', order: 'asc', sortBy: 'price' },
  { labelKey: 'products.sort.priceDesc', order: 'desc', sortBy: 'price' },
  { labelKey: 'products.sort.ratingAsc', order: 'asc', sortBy: 'rating' },
  { labelKey: 'products.sort.ratingDesc', order: 'desc', sortBy: 'rating' }
] as const;

type SortOptionValue = `${ProductsSortBy}:${SortOrder}`;

const toSortValue = (
  sortBy: ProductsSortBy,
  order: SortOrder
): SortOptionValue => {
  return `${sortBy}:${order}`;
};

const parseSortValue = (
  value: string
): { order: SortOrder; sortBy: ProductsSortBy } | null => {
  const option = SORT_OPTIONS.find((item) => {
    return toSortValue(item.sortBy, item.order) === value;
  });

  if (!option) {
    return null;
  }

  return { order: option.order, sortBy: option.sortBy };
};

export const ProductsSortSelect = () => {
  const { t } = useTranslation();
  const { order, setSort, sortBy } = useProductsSortParams();

  const handleValueChange = (value: string) => {
    const nextSort = parseSortValue(value);

    if (!nextSort) {
      return;
    }

    setSort(nextSort);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="products-sort">{t('products.sortLabel')}</Label>

      <Select
        value={toSortValue(sortBy, order)}
        onValueChange={handleValueChange}
      >
        <SelectTrigger id="products-sort" className="w-full min-w-56">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {SORT_OPTIONS.map((option) => {
            return (
              <SelectItem
                key={toSortValue(option.sortBy, option.order)}
                value={toSortValue(option.sortBy, option.order)}
              >
                {t(option.labelKey)}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

ProductsSortSelect.displayName = 'ProductsSortSelect';
