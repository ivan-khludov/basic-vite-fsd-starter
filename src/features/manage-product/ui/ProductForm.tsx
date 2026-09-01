import { useCallback, useMemo } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type ProductWritePayload } from '@/entities/product';
import { Button } from '@/shared/ui/button';
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput } from '@/shared/ui/input-group';
import { applyApiFieldErrors } from '@/shared/utils';

import {
  createProductFormSchema,
  type ProductFormValues
} from '../model/product-form-schema';

interface ProductFormProps {
  defaultValues?: ProductFormValues;
  submitLabel: string;
  isSubmitting: boolean;
  className?: string;
  onSubmit: (payload: ProductWritePayload) => Promise<void>;
}

const EMPTY_VALUES: ProductFormValues = {
  brand: '',
  price: '',
  title: ''
};

const toWritePayload = (values: ProductFormValues): ProductWritePayload => {
  return {
    brand: values.brand,
    price: Number(values.price),
    title: values.title
  };
};

export const ProductForm = ({
  defaultValues = EMPTY_VALUES,
  submitLabel,
  isSubmitting,
  className,
  onSubmit
}: ProductFormProps) => {
  const { t } = useTranslation();

  const productFormSchema = useMemo(() => createProductFormSchema(t), [t]);

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    values: defaultValues
  });

  const handleValidSubmit = useCallback(
    async (values: ProductFormValues) => {
      try {
        await onSubmit(toWritePayload(values));
      } catch (error) {
        if (applyApiFieldErrors(error, setError)) {
          return;
        }

        setError('root', {
          type: 'server',
          message: t('products.toasts.unknown')
        });
      }
    },
    [onSubmit, setError, t]
  );

  const handleFormSubmit = handleSubmit(handleValidSubmit);

  return (
    <form noValidate className={className} onSubmit={handleFormSubmit}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="product-title">
            <FieldTitle>{t('products.title')}</FieldTitle>
          </FieldLabel>

          <FieldContent>
            <InputGroup>
              <InputGroupInput
                id="product-title"
                autoComplete="off"
                placeholder={t('products.titlePlaceholder')}
                aria-invalid={Boolean(errors.title)}
                {...register('title')}
              />
            </InputGroup>

            <FieldError errors={errors.title ? [errors.title] : []} />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="product-price">
            <FieldTitle>{t('products.priceLabel')}</FieldTitle>
          </FieldLabel>

          <FieldContent>
            <InputGroup>
              <InputGroupInput
                id="product-price"
                inputMode="decimal"
                autoComplete="off"
                placeholder={t('products.pricePlaceholder')}
                aria-invalid={Boolean(errors.price)}
                {...register('price')}
              />
            </InputGroup>

            <FieldError errors={errors.price ? [errors.price] : []} />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="product-brand">
            <FieldTitle>{t('products.brand')}</FieldTitle>
          </FieldLabel>

          <FieldContent>
            <InputGroup>
              <InputGroupInput
                id="product-brand"
                autoComplete="off"
                placeholder={t('products.brandPlaceholder')}
                aria-invalid={Boolean(errors.brand)}
                {...register('brand')}
              />
            </InputGroup>

            <FieldError errors={errors.brand ? [errors.brand] : []} />
          </FieldContent>
        </Field>
      </FieldGroup>

      <FieldError errors={errors.root ? [errors.root] : []} />

      <Button type="submit" isLoading={isSubmitting} className="mt-6 w-full">
        {submitLabel}
      </Button>
    </form>
  );
};

ProductForm.displayName = 'ProductForm';
