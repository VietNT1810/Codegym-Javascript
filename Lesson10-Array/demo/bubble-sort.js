let items = [-3,7,3,8,24,6];

function bubbleSort(items) {
    let length = items.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < (length - 1); j++) {
            if (items[j] > items[j + 1]) {
                let tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
    return items;
}

console.log(bubbleSort(items));


// function swap(arr, first_Index, second_Index){
//     var temp = arr[first_Index];
//     arr[first_Index] = arr[second_Index];
//     arr[second_Index] = temp;
// }

// function bubble_Sort(arr){
//     var len = arr.length, i, j;

//     for (i=0; i < len; i++){
//         for (j=0; j < len - 1; j++){
//             if (arr[j] > arr[j+1]){
//                 swap(arr, j, j+1);
//             }
//         }
//     }

//     return arr;
// }
// console.log(bubble_Sort(items));