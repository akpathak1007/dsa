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

*/

/**
   Simple Sort
   - simple sort are basic sorting algorithms that are easy to understand and implement but inefficient for larger dataset.
   - typically haing O(n2) time complexity
   - O(n2) (pronounced "Big O of n square") is a time complexity term from algorithms that tells how the running time grows as input size increase
   - meaning input size n then operation n*n = n2 : 100 inputs = 100*100 (10000 operations)
   - O(n2) means that the algorithms works increase proportional to the square of the input size, making it slow for larger dataset.
   Characteristics of Simple Sort
   - straightforward logic
   - nested loops
   - slow on big data
   - good for teaching
   Example of Simple Sort
   - Bubble sort
   - selection sort
   - insertion sort
   Best for small arrays or educations use
   
*/

/**
   Efficient Sorts
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
