export function loadLocalStorageByKey<T>(key: string): T | null {
  const serializedSrc = window.localStorage.getItem(key);
  if (!serializedSrc) return null;
  const deserializedSrc = JSON.parse(serializedSrc);
  return deserializedSrc;
}

export function saveLocalStorageByKey(src: any, key: string): void {
  const serializedSrc = JSON.stringify(src);
  window.localStorage.setItem(key, serializedSrc);
}

export function deleteLocalStorageByKey(key: string): void {
  window.localStorage.removeItem(key);
}

export function loadSessionStorageByKey<T>(key: string): T | null {
  const serializedSrc = window.sessionStorage.getItem(key);
  if (!serializedSrc) return null;
  const deserializedSrc = JSON.parse(serializedSrc);
  return deserializedSrc;
}

export function saveSessionStorageByKey(src: any, key: string): void {
  const serializedSrc = JSON.stringify(src);
  window.sessionStorage.setItem(key, serializedSrc);
}

export function deleteSessionStorageByKey(key: string): void {
  window.sessionStorage.removeItem(key);
}

export function wait(duration: number = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
