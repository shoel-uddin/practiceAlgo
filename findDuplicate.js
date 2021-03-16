function findDuplicates(data) {
    let result = [];
    data.forEach(function(element, index) {
      // Find if there is a duplicate or not
        if (data.indexOf(element, index + 1) > -1) {
        // Find if the element is already in the result array or not
        if (result.indexOf(element) === -1) {
            result.push(element);
        }
        }
    });
    return result;
}
console.log( findDuplicates([]) ); // []
console.log( findDuplicates([1, 1, 1]) ); // [1]
console.log( findDuplicates([1, 2, 3, 1, 2, 1]) ); // [1, 2]