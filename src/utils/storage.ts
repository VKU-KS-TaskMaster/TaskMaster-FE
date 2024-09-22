export function getLocalStorage<T>(key: string, elseValue: T): T {
  const value = localStorage.getItem(key);
  if (value) {
    if (typeof elseValue === 'object') {
      try {
        return JSON.parse(value);
      } catch (e) {
        return elseValue;
      }
    } else if (typeof elseValue === 'number') {
      return Number(value || 0) as T;
    } else if (typeof elseValue === 'boolean') {
      return (value === 'true') as T;
    }
    return value as T;
  } else {
    return elseValue;
  }
}

export function setLocalStorage<T>(key: string, value: T) {
  if (typeof value === 'string') {
    localStorage.setItem(key, value);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
