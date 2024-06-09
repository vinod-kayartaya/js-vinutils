export function printObject(obj, indent = 0) {
  const spaces = (n) => ' '.repeat(n);
  const entries = Object.entries(obj);

  // Determine the maximum key length for alignment
  const maxKeyLength = Math.max(...entries.map(([key]) => key.length));

  entries.forEach(([key, value]) => {
    const paddedKey = key;
    const padding = spaces(maxKeyLength - key.length);
    const indentSpaces = spaces(indent);

    if (Array.isArray(value)) {
      console.log(`${indentSpaces}${paddedKey} ${padding}:`);
      value.forEach((item) => {
        console.log(`${spaces(maxKeyLength + indent + 2)}${item}`);
      });
    } else if (typeof value === 'object' && value !== null) {
      console.log(`${indentSpaces}${paddedKey} ${padding}:`);
      printObject(value, indent + 2);
    } else {
      console.log(`${indentSpaces}${paddedKey} ${padding}: ${value}`);
    }
  });
}
