import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { SUPPORT_CONFIG } from '@/shared/config';
import { i18n } from '@/shared/i18n';
import { renderWithProviders } from '@/shared/testing';

import { Footer } from './Footer';

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('Footer', () => {
  it('opens the support dialog with the USDT address', async () => {
    const user = userEvent.setup();

    renderWithProviders(<Footer />);

    await user.click(
      screen.getByRole('button', { name: i18n.t('layout.footer.support') })
    );

    expect(
      await screen.findByText(SUPPORT_CONFIG.usdtTrc20Address)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: i18n.t('support.qrAlt') })
    ).toHaveAttribute('src', SUPPORT_CONFIG.qrSrc);
  });

  it('copies the USDT address to the clipboard', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);

    vi.stubGlobal('navigator', {
      ...navigator,
      clipboard: { writeText }
    });

    renderWithProviders(<Footer />);

    await user.click(
      screen.getByRole('button', { name: i18n.t('layout.footer.support') })
    );
    await user.click(
      await screen.findByRole('button', { name: i18n.t('support.copy') })
    );

    expect(writeText).toHaveBeenCalledWith(SUPPORT_CONFIG.usdtTrc20Address);
  });
});
