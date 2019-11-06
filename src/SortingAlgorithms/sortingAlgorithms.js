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