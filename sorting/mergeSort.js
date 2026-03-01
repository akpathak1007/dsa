import Performance from "../utils/log.js";
import { Console } from "../utils/console.js";
/**
   - Merge algorithm is a procedure that combines two already sorted arrays into one sorted array by repeatedly comparing the smallest elements of each array and placing them in order.
   - Divide array in two small arrays 
   - Use recursion to call it self to divide array into two
   - Break array into two until it has only one element in that array: once it is one element function returns without doing anything
   - both arrays then again passed into the main sorting function (mergeSort())
   - As it is syncronous left portion always sorted first
   
   How algorithm work
      1. Compare first element of both array
   2. Put smaller into result
   3. Move pointer of that array
   4. Repeat until one array end
   5. Append remaing elements
   
*/
const consoleObj = new Console(true);
const log = consoleObj.console.bind(consoleObj);
const arr = [21, 1, 4, 3, 32, 45, 61, 42, 2, 9, 0, 12, 23];
let counter = 0;
const result = mergeSort(arr);

log("Result", result);

function mergeSort(arry) {
  const arr = [...arry];
  if (arr.length <= 1) return arr;
  const perf = new Performance("Merge Sorting");
  const start = perf.startLog.bind(perf);
  const end = perf.endLog.bind(perf);
  counter++;
  const mid = Math.floor(arr.length / 2);
  log("Mid Point", mid, "Counter", counter, "Length", arr.length, "Array", arr);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  end();
  return mergeAlgo(left, right);
}
function mergeAlgo(left, right) {
  const perf = new Performance("Main Merge Algo");
  const start = perf.startLog.bind(perf);
  const end = perf.endLog.bind(perf);
  let i = 0;
  let j = 0;
  log("Left", left, "Right", right);
  console.log("\n");
  const result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  const finalResult = result.concat(left.slice(i)).concat(right.slice(j));
  end(finalResult);
  return finalResult;
}
