let a = [1, 2, 6, 9, 11, 3, 4, 5, 7, 8];
  count = a.length;
let missing = new Array();

for (let i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing); // to check the result.
