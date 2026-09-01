import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { type Product } from '@/entities/product';
import { buildProductHref } from '@/shared/config';
import { AspectRatio } from '@/shared/ui/aspect-ratio';
import { Badge } from '@/shared/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/ui/card';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();

  const thumbnail = product.thumbnailUrl ? (
    <AspectRatio ratio={1} className="bg-muted">
      <img
        src={product.thumbnailUrl}
        alt={product.title}
        className="size-full object-cover"
      />
    </AspectRatio>
  ) : null;

  return (
    <Link to={buildProductHref(product.id)} className="block h-full">
      <Card size="sm" className="h-full hover:bg-muted/40">
        {thumbnail}

        <CardHeader>
          <CardTitle>{product.title}</CardTitle>

          {product.brand ? (
            <CardDescription>{product.brand}</CardDescription>
          ) : null}
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            {t('products.price', { price: product.price })}
          </Badge>

          <Badge variant="outline">
            {t('products.rating', { rating: product.rating })}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
};

ProductCard.displayName = 'ProductCard';
