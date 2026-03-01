import Performance from "../utils/log.js";
import { Console } from "../utils/console.js";
/**
   Insertion sort is a sorting algorithm that builds the sorted array one element at a time
   by inserting each new element into its correct position within the already sorted portion

   Simple idea : pick next card -> insert in correct place

   Visulization [5,2,9,1,6] sorted | unsorted
   [5] | [2,9,1,6]
   [2,5] | [9, 1, 6]
   [2,5,9] | [1, 6]
   [1,2,5,9] | [6]
   [1,2,5,6,9]
   
   
*/
const consoleLog = new Console(true);
const consol = consoleLog.console.bind(consoleLog);
const arr = [5, 2, 9, 1, 6];
const arr1 = [1.1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
function insertionSort(arr) {
  const log = new Performance("Insert Sort ");
  const start = log.startLog.bind(log);
  const end = log.endLog.bind(log);
  const a = [...arr];
  start("For loop start");
  for (let i = 1; i < arr.length; i++) {
    let outerLoop = `OUTER i=${i}|${a[i]} Array ${a.join(",")} `;
    consol(outerLoop);
    let key = a[i]; // insert value
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      let innerLoop = `INNER j=${j}|${a[j]} `;
      a[j + 1] = a[j];
      j--;
      innerLoop += "Array " + a.join(",");
      consol(innerLoop);
    }
    a[j + 1] = key;
    console.log("\n");
  }
  end();
  end();
}
insertionSort(arr1);
