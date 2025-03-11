export const algoCollection = {
    "Linear Search":
        "function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i;\n  }\n  return -1;\n}",
    "Binary Search":
        "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    else if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",

    "Bubble Sort":
        "function bubbleSort(arr) {\n  let swapped;\n  do {\n    swapped = false;\n    for (let i = 0; i < arr.length - 1; i++) {\n      if (arr[i] > arr[i + 1]) {\n        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];\n        swapped = true;\n      }\n    }\n  } while (swapped);\n  return arr;\n}",
    "Selection Sort":
        "function selectionSort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    let minIdx = i;\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[j] < arr[minIdx]) minIdx = j;\n    }\n    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];\n  }\n  return arr;\n}",
    "Insertion Sort":
        "function insertionSort(arr) {\n  for (let i = 1; i < arr.length; i++) {\n    let key = arr[i], j = i - 1;\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j];\n      j--;\n    }\n    arr[j + 1] = key;\n  }\n  return arr;\n}",
    "Merge Sort":
        "function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2),\n        left = mergeSort(arr.slice(0, mid)),\n        right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\nfunction merge(left, right) {\n  let result = [], i = 0, j = 0;\n  while (i < left.length && j < right.length) {\n    result.push(left[i] < right[j] ? left[i++] : right[j++]);\n  }\n  return [...result, ...left.slice(i), ...right.slice(j)];\n}",
    "Quick Sort":
        "function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[arr.length - 1],\n        left = arr.filter((el, i) => el < pivot && i !== arr.length - 1),\n        right = arr.filter(el => el >= pivot && el !== pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}",
};
