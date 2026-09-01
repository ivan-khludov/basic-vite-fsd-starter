import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { clearSessionAccessToken } from '@/entities/session';
import { ROUTES_CONFIG } from '@/shared/config';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useCallback(() => {
    clearSessionAccessToken();
    queryClient.clear();

    void navigate(ROUTES_CONFIG.LOGIN.href, { replace: true });
  }, [navigate, queryClient]);
};
