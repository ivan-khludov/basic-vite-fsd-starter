import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent
} from 'react';

import { useTranslation } from 'react-i18next';

import { InputGroup, InputGroupInput } from '@/shared/ui/input-group';
import { Label } from '@/shared/ui/label';

import { useProductsSearchParams } from '../model/useProductsSearchParams';

const SEARCH_DEBOUNCE_MS = 300;

export const ProductsSearchField = () => {
  const { t } = useTranslation();
  const { q, setQuery } = useProductsSearchParams();
  const [draftQuery, setDraftQuery] = useState(q);
  const debounceTimeoutId = useRef<number | undefined>(undefined);

  useEffect(() => {
    setDraftQuery(q);
    window.clearTimeout(debounceTimeoutId.current);
  }, [q]);

  useEffect(() => {
    return () => {
      window.clearTimeout(debounceTimeoutId.current);
    };
  }, []);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextQuery = event.target.value;

    setDraftQuery(nextQuery);
    window.clearTimeout(debounceTimeoutId.current);

    debounceTimeoutId.current = window.setTimeout(() => {
      setQuery(nextQuery);
    }, SEARCH_DEBOUNCE_MS);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.clearTimeout(debounceTimeoutId.current);
    setQuery(draftQuery);
  };

  return (
    <form
      className="flex min-w-0 flex-1 flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <Label htmlFor="products-search">{t('products.searchLabel')}</Label>

      <InputGroup>
        <InputGroupInput
          id="products-search"
          type="search"
          value={draftQuery}
          placeholder={t('products.searchPlaceholder')}
          autoComplete="off"
          onChange={handleQueryChange}
        />
      </InputGroup>
    </form>
  );
};

ProductsSearchField.displayName = 'ProductsSearchField';
