export function greeting(name) {
  return `Hello, ${name}!`;
}

export function welcome(name) {
  if (typeof name !== 'string') {
    throw new TypeError('name must be a string');
  }
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    throw new RangeError('name must not be empty');
  }
  return `Welcome, ${trimmed}!`;
}
