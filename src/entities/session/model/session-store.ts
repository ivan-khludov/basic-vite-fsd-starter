import { useSyncExternalStore } from 'react';

import {
  clearSession,
  getAccessToken,
  setAccessToken,
  setTokens,
  type PersistMode,
  type SessionTokens
} from './session-storage';

export type SessionEndReason = 'expired';

type SessionSnapshot = {
  accessToken: string | null;
  endReason: SessionEndReason | null;
  isAuthenticated: boolean;
};

type Listener = () => void;

const listeners = new Set<Listener>();

let endReason: SessionEndReason | null = null;

const computeSnapshot = (): SessionSnapshot => {
  const accessToken = getAccessToken();

  return { accessToken, endReason, isAuthenticated: Boolean(accessToken) };
};

// useSyncExternalStore compares snapshots by reference, so the value must stay
// stable between changes instead of being rebuilt on every read.
let snapshot: SessionSnapshot = computeSnapshot();

const notify = () => {
  snapshot = computeSnapshot();

  listeners.forEach((listener) => {
    listener();
  });
};

const getSnapshot = (): SessionSnapshot => {
  return snapshot;
};

const subscribe = (listener: Listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

if (typeof window !== 'undefined') {
  // Keeps tabs in sync: signing out in one tab logs out the others.
  // The in-memory end reason is tab-local and must not survive a storage
  // event, including the test-setup reset.
  window.addEventListener('storage', () => {
    endReason = null;
    notify();
  });
}

export const useSession = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
};

export const setSessionTokens = (
  tokens: SessionTokens,
  persistMode: PersistMode
) => {
  endReason = null;
  setTokens(tokens, persistMode);
  notify();
};

export const setSessionAccessToken = (
  token: string,
  persistMode: PersistMode
) => {
  endReason = null;
  setAccessToken(token, persistMode);
  notify();
};

export const clearSessionAccessToken = (options?: {
  reason?: SessionEndReason;
}) => {
  endReason = options?.reason ?? null;
  clearSession();
  notify();
};
