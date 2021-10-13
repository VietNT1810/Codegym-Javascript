

function isPalindrome(s) {
    let stringArray = s.split('');
    let temp = stringArray;

    let stringReverse = reverseArray(temp);

    return console.log(stringReverse, stringArray);

    // if (stringArray == stringReverse) {
    //     return true;
    // } else {
    //     return false;
    // }
}

function reverseArray(array) {
    let first = 0;
    let last = array.length - 1;
    let temp;

    while (first < last) {
        temp = array[first];
        array[first] = array[last];
        array[last] = temp;
        first++;
        last--;
    }
    return array;
}


