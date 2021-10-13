let newProduct = document.getElementById('newProduct');
let result = document.getElementById('result');
let arrayProduct = [];
let count = 0;

function addBtn() {
    let table = document.getElementById('productTable');
    count++;
    document.getElementById('countProduct').innerHTML = `${count} product`;

    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = `${count}`;
    cell2.innerHTML = newProduct.value;
    cell3.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    newProduct.value = '';
}

//Delete row
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("productTable").deleteRow(i);
    count--;
}