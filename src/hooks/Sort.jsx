/**
 * Sorts an array of objects based on a specified parameter.
 *
 * @param {string} param - The parameter to sort the objects by.
 * @param {Array} data - The array of objects to sort.
 * @return {Array} - The sorted array of objects.
 */
function sortByParam(param, data) {
  // Sort the data array based on the specified parameter
  return data.sort((a, b) => {
    // If the value of the specified parameter in object a is less than the value in object b,
    // return -1 to indicate that object a should be placed before object b in the sorted array.
    if (a[param] < b[param]) {
      return -1;
    }
    // If the value of the specified parameter in object a is greater than the value in object b,
    // return 1 to indicate that object a should be placed after object b in the sorted array.
    if (a[param] > b[param]) {
      return 1;
    }
    // If the values of the specified parameter in objects a and b are equal, return 0 to indicate
    // that the order of the objects should not be changed in the sorted array.
    return 0;
  });
}

export default sortByParam;

