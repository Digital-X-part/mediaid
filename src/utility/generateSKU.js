function generateSKU(productName, category, brand) {
  const baseSKU = `${productName}-${category}-${brand}`;

  // Adding a timestamp or date component (useful for products added on the same day)
  const dateComponent = new Date().toISOString().slice(0, 10).replace(/-/g, "");

  // Adding a random component
  const randomComponent = Math.random().toString(36).substr(2, 5); // 5-character random string

  // Adding a checksum or hash (you can use a library like crypto-js for more secure hashing)
  const hash = hashCode(baseSKU + dateComponent + randomComponent);

  // Combining all components and padding if necessary
  const paddedSKU = (baseSKU + dateComponent + randomComponent + hash).padEnd(
    20,
    "0"
  );

  return paddedSKU;
}

// Hashing function (a simple implementation for demonstration purposes)
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return hash.toString().substr(0, 4); // 4-digit hash
}

export default generateSKU;