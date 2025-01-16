import { useState } from "react";

export function UseLocalStorage(key: string, initialValues: Record<string, string>) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValues;
    } catch (error) {
      return initialValues;
    }
  });

  const setValue = (value: Record<string, string>) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
