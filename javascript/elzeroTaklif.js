/*
function pickPeaks(arr) {
  let a = [];
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] > arr[i - 1] &&
      arr[i - 1] >= arr[i - 2] &&
      arr[i] > arr[i + 1] &&
      arr[i + 1] >= arr[i + 2]
    ) {
      b.push(arr[i]);
      a.push(i);
    } else if (
      arr[i] > arr[i - 1] &&
      arr[i] == arr[i + 1] &&
      arr[i + 1] >= arr[i + 2]
    ) {
      b.push(arr[i]);
      a.push(i);
    } else if (
      arr[i] > arr[i + 1] &&
      arr[i] > arr[i - 1] &&
      arr[i + 1] <= arr[i + 2] &&
      arr[i - 1] <= arr[i - 2]
    ) {
      b.push(arr[i]);
      a.push(i);
    }
  }
  return { pos: a, peaks: b };
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])); // {pos:[3,7], peaks:[6,3]}
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])); // {pos:[3,7], peaks:[6,3]}
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])); // {pos:[3,7], peaks:[6,3]}
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1])); // {pos:[3,7], peaks:[6,3]}
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])); // {pos:[3,7], peaks:[6,3]}
console.log(
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ])
); // {pos:[3,7], peaks:[6,3]}
*/
