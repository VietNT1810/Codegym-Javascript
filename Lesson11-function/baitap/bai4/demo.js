let s = 'qwtww';
let splitString = s.split('');
let reverseString = reverseArray(splitString);

function reverseArray(a) {
    let first = 0;
    let last = a.length - 1;
    let temp;

    while (first < last) {
        temp = a[first];
        a[first] = a[last];
        a[last] = temp;
        first++;
        last--;
    }

    let joinArray = a.join('');

    return joinArray;
}

if (s == reverseString) {
    console.log(true);
} else {
    console.log(false);
}

