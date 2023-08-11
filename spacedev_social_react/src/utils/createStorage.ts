export const createStorage = (name: string) => {
  return {
    set: (data: any) => {
      localStorage.setItem(name, JSON.stringify(data));
    },
    get: () => {
      try {
        return JSON.parse(localStorage.getItem(name) || "null");
      } catch (err) {
        return null;
      }
    },
    clear: () => {
      localStorage.removeItem(name);
    },
  };
};

export const userStorage = createStorage("user");
