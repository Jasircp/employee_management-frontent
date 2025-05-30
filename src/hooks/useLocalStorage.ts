import { useState, useEffect } from "react";
function useLocalStorage(key:any, initialValue:any ) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("useLocalStorage error:", error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Failed to save to localStorage", error);
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}
export default useLocalStorage;