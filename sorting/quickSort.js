/**
   Quick sort is a divide and conquer sorting algorithm that selects a pivot element and partitions the remaining elements into two subarrays - thoes less than
   the pivot and those greater than the pivot - then recursively sort the subarrays.
   - in this example partion logic is in line mean no extra function
   - it is memory heavy because two extra arrays are created left right
   - it is slower than quickSort with partion function
   
*/

const arr = [10, 7, 9, 12, 0, 1, 5, 4, 2, 19, 13];
let counter = 0;
//const result = quickSort(arr);
const result = quickSortWithPartionLogic(arr);
console.log(result);

/** Without partition function */
function quickSort(array) {
  counter++;

  const arr = [...array];
  console.log("ARRAY", arr);
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(counter, pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
/**
   - It worked on replacement logic. no extra arrays are created, origial array is updated.
   - after sorting value are replaced in the original array
   - no extra array is required so easy on memory
   - faster than in line partition logic
   - it is in place partition logic
 */

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1; // Index of last lesser value than pivot. (So always pivot index will be i+1)
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
function quickSortWithPartionLogic(
  arr,
  low = 0,
  high = arr.length - 1,
  call = "start",
) {
  if (low < high) {
    counter++;
    console.log(counter, arr, low, "high", high, call, "\n");
    let partitionIndex = partition(arr, low, high);
    quickSortWithPartionLogic(arr, low, partitionIndex - 1, "first");
    quickSortWithPartionLogic(arr, partitionIndex + 1, high, "second");
  }
  return arr;
}
