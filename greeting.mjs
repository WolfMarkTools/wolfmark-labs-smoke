export function greeting(name) {
  if (typeof name !== 'string') {
    throw new TypeError('name must be a string');
  }
  const trimmed = name.trim();
  if (trimmed === '') {
    throw new RangeError('name must not be empty');
  }
  return `Hello, ${trimmed}!`;
}
