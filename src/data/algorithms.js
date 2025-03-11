export const algoCollection = {
    "Linear Search":
        "function linearSearch(arr, target) { for (let i = 0; i < arr.length; i++) { if (arr[i] === target) return i; } return -1; }",
    "Binary Search":
        "function binarySearch(arr, target) { let left = 0, right = arr.length - 1; while (left <= right) { let mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }",

    "Bubble Sort":
        "function bubbleSort(arr) { let swapped; do { swapped = false; for (let i = 0; i < arr.length - 1; i++) { if (arr[i] > arr[i + 1]) { [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; swapped = true; } } } while (swapped); return arr; }",
    "Selection Sort":
        "function selectionSort(arr) { for (let i = 0; i < arr.length; i++) { let minIdx = i; for (let j = i + 1; j < arr.length; j++) { if (arr[j] < arr[minIdx]) minIdx = j; } [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; } return arr; }",
    "Insertion Sort":
        "function insertionSort(arr) { for (let i = 1; i < arr.length; i++) { let key = arr[i], j = i - 1; while (j >= 0 && arr[j] > key) { arr[j + 1] = arr[j]; j--; } arr[j + 1] = key; } return arr; }",
    "Merge Sort":
        "function mergeSort(arr) { if (arr.length <= 1) return arr; const mid = Math.floor(arr.length / 2), left = mergeSort(arr.slice(0, mid)), right = mergeSort(arr.slice(mid)); return merge(left, right); } function merge(left, right) { let result = [], i = 0, j = 0; while (i < left.length && j < right.length) { result.push(left[i] < right[j] ? left[i++] : right[j++]); } return [...result, ...left.slice(i), ...right.slice(j)]; }",
    "Quick Sort":
        "function quickSort(arr) { if (arr.length <= 1) return arr; const pivot = arr[arr.length - 1], left = arr.filter((el, i) => el < pivot && i !== arr.length - 1), right = arr.filter(el => el >= pivot && el !== pivot); return [...quickSort(left), pivot, ...quickSort(right)]; }",
};
