/**
   A sorting algorithm is a procedure that arranges elements of a collection in a specific order typically ascending and descending
   Sorting helps in:
   - faster search (binary search)
   - data analysis
   - ranking system
   - database indexing
   - reporting

   Types of sorting algorith
   - Simple sorts
   - Efficient sorts
   - Non comparision sort
   - hybrid sorts

   Other type of odering
   1. Ascending Order (Small -> big)
   2. Descending Order (Big -> small)
   3. Lexicographic Order (Dictionary)
   4. Custom and key based order
   5. Number vs Lexial Ordering : String-> "10", "2","30" || Lexical sort
   6. Stable and Unsable Ordering: stable sort keeps equal element in original order ([A, score 90], [b, socre 90])
   7. Multi level Sorting : Sort by age, name, then city
   8. Domain Specific Sorting : By Date, Distance, priority, frequency, relevence, score

*/

/**
   ## SIMEPLE SORT ALGO (Bubble, Selection, Insert) ##
   - simple sort are basic sorting algorithms that are easy to understand and implement but inefficient for larger dataset.
   - typically haing O(n2) time complexity
   - O(n2) (pronounced "Big O of n square") is a time complexity term from algorithms that tells how the running time grows as input size increase
   - meaning input size n then operation n*n = n2 : 100 inputs = 100*100 (10000 operations)
   - O(n2) means that the algorithms works increase proportional to the square of the input size, making it slow for larger dataset.
   - Best for small arrays or educations use
   Characteristics of Simple Sort
   - straightforward logic
   - nested loops
   - slow on big data
   - good for teaching
   Example of Simple Sort
   - Bubble sort
   - selection sort
   - insertion sort

   
   ** Bubble Sort Algo **
     -  Repeatedly compares adjacent element and swap them if they are in wrong order, causing larger element to bubble to the end
     -  Requires two loops first loop iterates array.lenth times.
     -  Second loop iterates over element each time buble the large item at the end
     - this is the reason second loop iteration decreases after each first loop iteration
     - Bubble sort (Accending), sort from right to left means larger number at right first
     - Bubble sort (Desccending), sort from left to right means smallest number at the left.

     
   ** Selection Sort **
  -  Selection sort is a comparison based sorting algorithm that repeatedly select the smallest (or largest) element from the unsorted portion of the list and places it at its correct position in the sorted portion
  - In ascending selection sort left side start sorting first (left -> right)

  Working :-
  1. Each of outer loop iteration pick value of itreration index value (arr[i]) make it minmum index
  2. Inner loop compare minIndex value with other elements if it found lesser value minIndex changes.
  3. After completing inner loop it swap the value of a[i] with a[minIndex]

  Optimisation
  1. Avoid useless last pass
  2. Avoid self swap
  3. Remove logging from hot loop
  4. Cache length : Avoid repeated property access


  **  Insert Sort Algo **
  - Insertion sort is a sorting algorithm that builds the sorted array one element at a time by inserting each new element into its correct position within the already sorted portion

   Simple idea : pick next card -> insert in correct place

   Visulization [5,2,9,1,6] sorted | unsorted
   [5] | [2,9,1,6]
   [2,5] | [9, 1, 6]
   [2,5,9] | [1, 6]
   [1,2,5,9] | [6]
   [1,2,5,6,9]

*/

/**
   ## Efficient sorts (Merge, Quick, Heap) ##
   - Efficient sort are advanced sorting algorithms designed to handle large dataset efficiently, usually achieving O(n log n ) time complexity
   Characteristics of Efficient Sorts
   - Divide and conquer or heap structure
   - Scalable to large inputs
   - Widely used in production
   Example
   - Merge Sort
   - Quick Sort
   - Heap Sort
   Best for large dataset, real applications
   Work = n * log2n
   - n = 10 | n2 = 100 | n log n = 33
   - n = 100 | n2= 10000 | n log n = 664
   - n = 1000 | n2 = 1000000 | n log n = 9966
   - n = 1000000 | n2 = huge | n log n = ~20M

   ** Merge Sort Algo **
   ** Quck Sort Algo**
   ** Head Sort Algo**
   
   */

/**
   Non-Comparison Sorts
   -  Non-comparision sorts are sorting algorithms that dont not compare elements directly; instead they use properties of the data (like digits or value ranges ) to place elements
   - achiving O(n) or near linear time under constraints
   Characteristics
   - no < or > comparisons
   - require numeric / bounded keys
   - often linear time
   Example
   - Counting Sort
   - Redix Sort
   - Bucket Sort
   Best for : Integer, fixed range data, IDs
   
   
*/

/**
   Hybrid Sorts
   - Hybrid sorts combine multiple sorting technique to exploit their strengths and avoid weakness adapting to data size or structure for optimal real work performance
   Characteristics
   - Adaptive
   - practical library sort
   - switch strategies internally
   Example
   - TimSort (Marge + insertion)
   - IntroSort (Quick + Heap + Insertion)
   - SpreadSort
   Used in
   - JS engine
   - python sorted()
   - c++ std::sort()
 */
