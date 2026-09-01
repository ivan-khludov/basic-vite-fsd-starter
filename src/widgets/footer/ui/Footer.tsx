import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { SUPPORT_CONFIG } from '@/shared/config';
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
import { toast } from '@/shared/ui/toaster';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const handleCopyAddress = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_CONFIG.usdtTrc20Address);
      toast.success(t('support.copied'));
    } catch {
      toast.error(t('support.copyFailed'));
    }
  }, [t]);

  return (
    <footer className="flex h-12 shrink-0 items-center justify-between gap-4 border-t border-border px-4 text-sm text-muted-foreground">
      <p>
        {t('layout.footer.copyright', {
          year,
          author: SUPPORT_CONFIG.authorName
        })}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" size="sm" className="text-muted-foreground">
            {t('layout.footer.support')}
          </Button>
        </DialogTrigger>

        <DialogContent closeLabel={t('common.cancel')}>
          <DialogHeader>
            <DialogTitle>{t('support.title')}</DialogTitle>
            <DialogDescription>{t('support.description')}</DialogDescription>
          </DialogHeader>

          <img
            src={SUPPORT_CONFIG.qrSrc}
            alt={t('support.qrAlt')}
            width={200}
            height={200}
            className="mx-auto rounded-md"
          />

          <div className="flex flex-col gap-2">
            <p className="font-medium">{t('support.addressLabel')}</p>
            <p className="font-mono text-xs break-all">
              {SUPPORT_CONFIG.usdtTrc20Address}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('support.networkWarning')}
            </p>
          </div>

          <DialogFooter>
            <Button onClick={handleCopyAddress}>{t('support.copy')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

Footer.displayName = 'Footer';
