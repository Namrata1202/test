/**
 * Filters an array of objects based on a specified key and value.
 *
 * @param {string} key - The key to filter the objects by.
 * @param {string} value - The value to match against the key.
 * @param {Array} data - The array of objects to filter.
 * @return {Array} - The filtered array of objects.
 */
function filterBy(key, value, data) {
  // Filter the data array based on the specified key and value
  return data.filter(item => {
    // Convert both the item value and the provided value to lowercase for case-insensitive comparison
    const itemValue = item[key]?.toString().toLowerCase();
    const providedValue = value.toString().toLowerCase();

    // Check if the item value matches the provided value
    return itemValue === providedValue;
  });
}

export default filterBy;
