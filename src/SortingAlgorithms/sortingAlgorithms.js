export const mergeSort = array => {
    if (array.length === 1)
        return array;
    const mid = Math.floor(array.length / 2);
    const L = mergeSort(array.slice(0, mid));
    const R = mergeSort(array.slice(mid));
    const sortedArray = [];

    let i = 0, j = 0;
    while (i < L.length && j < R.length) {
        if (L[i] < R[i]) {
            sortedArray.push(L[i++]);
        }
        else {
            sortedArray.push(R[j++]);
        }
    }

    while (i < L.length) {
        sortedArray.push(L[i++]);
    }
    while (j < R.length) {
        sortedArray.push(R[j++]);
    }
    return sortedArray;
};

export const bubbleSort = array => {
    if (array.length === 1)
        return array;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
