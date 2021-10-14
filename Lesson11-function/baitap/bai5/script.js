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
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = `${count}`;
    cell2.innerHTML = `<div id="editAble">${newProduct.value}</div>`;
    cell3.innerHTML = '<button onclick="editRow(this)">Edit</button>';
    cell4.innerHTML = '<button onclick="saveRow(this)">Save</button>';
    cell5.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    newProduct.value = '';
}

//Delete row
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("productTable").deleteRow(i);
    for (var i = 1; i < productTable.rows.length; i++) {
        productTable.rows[i].cells[0].innerHTML = i;
        document.getElementById('countProduct').innerHTML = `${i} product`;
    }   
}

//Edit row
function editRow(r) {
    let selectedRow = r.parentElement.parentElement;
    selectedRow.cells[1].setAttribute('contenteditable','true');
}

//Save row
function saveRow(r) {
    let selectedRow = r.parentElement.parentElement;
    selectedRow.cells[1].removeAttribute('contenteditable','true');
}