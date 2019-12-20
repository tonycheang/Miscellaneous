function flattenArray(nestedArray) {
    const flattened = [];

    recurFlattenWhileNoContinue(nestedArray, 0, flattened);
    return flattened;
}

function recurFlatten(nestedArray, i, flattened) {
    for (let elm of nestedArray) {
        if (Array.isArray(elm)) {
            recurFlatten(elm, 0, flattened);
        } else {
            flattened.push(elm);
        }
    }
}

function recurFlattenWhile(nestedArray, i, flattened) {
    while (i < nestedArray.length) {
        if (Array.isArray(nestedArray[i])) {
            recurFlatten(nestedArray[i], 0, flattened);
            i++;
            continue;
        }
        flattened.push(nestedArray[i]);
        i++;
    }
}

function recurFlattenWhileNoContinue(nestedArray, i, flattened) {
    while (i < nestedArray.length) {
        if (Array.isArray(nestedArray[i])) {
            recurFlatten(nestedArray[i], 0, flattened);
        } else {
            flattened.push(nestedArray[i]);
        }
        i++;
    }
}

console.log(flattenArray([1, [2, 3], [4, [5, 6, [], [[7, 8, 9]]]]]));
