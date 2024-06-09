export function printTable(data) {
  if (data.length === 0) {
    console.log('No data to display');
    return;
  }

  const keys = Object.keys(data[0]);

  // Calculate the maximum width for each column
  const colWidths = keys.map((key) =>
    Math.max(key.length, ...data.map((row) => String(row[key]).length))
  );

  // Helper function to pad a string to a certain length
  const pad = (str, length) => str + ' '.repeat(length - str.length);

  // Create the top and bottom borders
  const border =
    '+' + colWidths.map((width) => '-'.repeat(width + 2)).join('+') + '+';

  // Print the top border
  console.log(border);

  // Print the header row
  const header =
    '|' +
    keys.map((key, i) => ' ' + pad(key, colWidths[i]) + ' ').join('|') +
    '|';
  console.log(header);

  // Print the separator row
  const separator =
    '|' + colWidths.map((width) => '-'.repeat(width + 2)).join('|') + '|';
  console.log(separator);

  // Print the data rows
  data.forEach((row) => {
    const line =
      '|' +
      keys
        .map((key, i) => ' ' + pad(String(row[key]), colWidths[i]) + ' ')
        .join('|') +
      '|';
    console.log(line);
  });

  // Print the bottom border
  console.log(border);
}
