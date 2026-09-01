/**
 * Node 25 exposes a built-in Web Storage that shadows the jsdom one and stays
 * unusable without `--localstorage-file`. Tests get a deterministic in-memory
 * implementation instead.
 */
export const createMemoryStorage = (): Storage => {
  const store = new Map<string, string>();

  return {
    get length() {
      return store.size;
    },
    clear: () => {
      store.clear();
    },
    getItem: (key: string) => {
      return store.get(key) ?? null;
    },
    key: (index: number) => {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    setItem: (key: string, value: string) => {
      store.set(key, String(value));
    }
  };
};
