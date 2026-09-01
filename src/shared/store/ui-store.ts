import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { APP_CONFIG } from '@/shared/config';

interface UiState {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  toggleSidebar: () => void;
}

/**
 * Cross-widget view preferences. Lives in `shared` because both the header and
 * the sidebar need it, and FSD forbids widget-to-widget imports.
 */
export const useUiStore = create<UiState>()(
  persist(
    (set) => {
      return {
        isSidebarOpen: true,
        setSidebarOpen: (isOpen) => {
          set({ isSidebarOpen: isOpen });
        },
        toggleSidebar: () => {
          set((state) => {
            return { isSidebarOpen: !state.isSidebarOpen };
          });
        }
      };
    },
    {
      name: APP_CONFIG.storage.uiStateKey,
      partialize: (state) => {
        return { isSidebarOpen: state.isSidebarOpen };
      }
    }
  )
);

export const useIsSidebarOpen = () => {
  return useUiStore((state) => state.isSidebarOpen);
};

export const useToggleSidebar = () => {
  return useUiStore((state) => state.toggleSidebar);
};
