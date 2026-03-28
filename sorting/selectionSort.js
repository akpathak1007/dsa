import Performance from "../utils/log.js";
/*
  Selection sort is a comparison based sorting algorithm that repeatedly select the
  smallest (or largest) element from the unsorted portion of the list and places it
  at its correct position in the sorted portion

  Working :-
  1. Each of outer loop iteration pick value of itraction index value (arr[i]) make it minmum index
  2. Inner loop compare minIndex value with other elements if it found lesser value minIndex changes.
  3. After completing inner loop it swap the value of a[i] with a[minIndex]

*/
const arr = [29, 10, 40, 14, 37, 13, 9, 41];

/**
   1.In ascending selection sort left side start sorting first (left -> right)
   */
function ascendingSort(arr) {
  const performance = new Performance("Ascending Selection Sort");
  let start = performance.startLog.bind(performance);
  let end = performance.endLog.bind(performance);
  console.log("Main Array", arr);
  const a = [...arr];
  start("Outer Loop");
  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i;
    let outerLog = `i=${i}|${a[i]} `;
    console.log(" $$ Outer START $$ ", outerLog);
    let counter = 0;
    for (let j = i + 1; j < a.length; j++) {
      counter++;
      let innerLog = `j=${j}|${a[j]} minIndex=${minIndex}|${a[minIndex]} `;
      if (a[j] < a[minIndex]) {
        minIndex = j;
        innerLog += "EXECUTED ";
      }
      console.log(innerLog, "\n");
    }
    [a[i], a[minIndex]] = [a[minIndex], a[i]];
    outerLog += `iteration=${counter} a=${a.join(",")}`;
    console.log("## Outer END ## ", outerLog, "\n");
  }
  end();
  end();
  return a;
}
/**
     Optimisation
  1. Avoid useless last pass
  2. Avoid self swap
  3. Remove logging from hot loop
  4. Cache length : Avoid repeated property access

   */
function ascendingSortOptimized(arr) {
  const log = new Performance("Optimized Version");
  const start = log.startLog.bind(log);
  const end = log.endLog.bind(log);
  const a = [...arr];
  const n = a.length;
  let counter = 0;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[minIndex]) {
        minIndex = j;
      }
    }
    //Swap only if different
    if (minIndex !== i) {
      [a[i], a[minIndex]] = [a[minIndex], a[i]];
    } else {
      counter++;
    }
  }
  //  console.log(counter);
  end();
  return a;
}

const result1 = ascendingSort(arr);
console.log("ASCENDING ORDER", result1);
const optimized = ascendingSortOptimized(arr);
console.log("OPTIMIZED ASCENDING ORDER", optimized);
