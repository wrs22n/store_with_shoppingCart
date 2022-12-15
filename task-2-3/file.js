let arr = [4, 6, 3, 8, 9, 10, 14, 3, 7];

function bubbleSort(arr) {
    const array = [...arr];
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                const element = array[i];
                array[i] = array[i + 1];
                array[i + 1] = element;
            }
        }
    }
    return array;
}

function sortByChoice(arr) {
    const array = [...arr];
    for (let j = 0; j < array.length; j++) {
        let min = Infinity;
        let index = 0;
        for (let i = j; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
                index = i;
            }
        }
        const element = array[j];
        array[j] = min;
        array[index] = element;
    }
    return array;
}

function insertionSort(arr) {
    const array = [...arr];
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let element = array[i];
        while (j >= 0 && array[j] > element) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = element;
    }
    return array;
}

function quickSort(arr) {
    if (arr.length < 2) return arr;
    let last = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (last > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(last, quickSort(right));
}

function merging(left, right) {
    const array = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    while (left.length) {
        array.push(left.shift());
    }
    while (right.length) {
        array.push(right.shift());
    }
    return array;
}

function merg(arr) {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    return merging(merg(left), merg(right));
}

console.log(bubbleSort(arr));
console.log(sortByChoice(arr));
console.log(insertionSort(arr));
console.log(quickSort(arr));
console.log(merg(arr));
console.log(arr);
