/**
  -  Repeatedly compares adjacent element and swap them if they are in wrong order, causing larger element to bubble to the end
  -  Requires two loops first loop iterates array.lenth times.
  -  Second loop iterates over element each time buble the large item at the end
  - this is the reason second loop iteration decreases after each first loop iteration
  - Bubble sort (Accending), sort from right to left means larger number at right first
*/

function basicBubbleSort(arr) {
  console.log("Original Array", arr);
  let a = [...arr]; // creating a new array
  console.log("Loop Start");
  for (let i = 0; i < a.length; i++) {
    console.log(i, "----------------------");
    let logI = `i=${i} `;
    let log = logI;
    for (let j = 0; j < a.length - i - 1; j++) {
      log += `j=${j} ilc=${a.length - i - 1} j+1=${j + 1} jValue=${a[j]} j+1Value=${a[j + 1]} `;
      if (a[j] > a[j + 1]) {
        log += "CONDITION EXECUTAED";
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
      console.log(log, a.join(","), "\n");
      log = logI;
    }
  }
  console.log("Loop End");
  return a;
}
console.log(
  "Bubble Sorted Array Accending",
  basicBubbleSort([71, 9, 18, 20, 4, 70, 18, 13]),
);
