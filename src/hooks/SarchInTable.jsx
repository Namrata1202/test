/**
 * Filters the table data based on the search string.
 *
 * @param {string} sarchStr - The search string to filter the table data.
 * @param {Array} tableData - The table data to be filtered.
 * @return {Array} - The filtered table data.
 */
function sarchInTheTable(sarchStr, tableData) {
  // Log the search string and table data
  console.log(sarchStr, tableData);

  // Filter the table data based on the search string
  return tableData.filter(item => {
    // Iterate over each key in the item
    for (let key in item) {
      // Log the key and corresponding value
      console.log(key, item[key]);

      // Check if the value of the item includes the search string
      if (item[key]?.toString().toLowerCase().includes(sarchStr.toLowerCase())) {
        // Return true if the value includes the search string
        return true;
      }
    }
    // Return false if no match is found
    return false;
  });
}

export default sarchInTheTable;
