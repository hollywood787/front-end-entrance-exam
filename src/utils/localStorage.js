export const setItemLocalStorage = (name, value) => {
  globalThis?.localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalKey = (name) => {
  const key = globalThis?.localStorage?.getItem(name);

  if (key) {
    return JSON.parse(key);
  }

  return null;
};
