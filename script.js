function readData() {
  let EnteredData = read();
  let donedata = retrivedata(EnteredData);
  console.log(donedata);
  insertData(donedata);
}
function read() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let arr = [name, mobile, email, address];
  return arr;
}

function retrivedata(EnteredData) {
  localStorage.setItem("Name", EnteredData[0]);
  localStorage.setItem("Mobile", EnteredData[1]);
  localStorage.setItem("Email", EnteredData[2]);
  localStorage.setItem("Address", EnteredData[3]);

  let Name1 = localStorage.getItem("Name");
  let Mobile1 = localStorage.getItem("Mobile");
  let Email1 = localStorage.getItem("Email");
  let Address1 = localStorage.getItem("Address");
  let arr1 = [Name1, Mobile1, Email1, Address1];
  return arr1;
}
function insertData(donedata) {
  let table = document.getElementById("storelist");
  let row = table.insertRow();
  row.insertCell(0).innerHTML = donedata[0];
  row.insertCell(1).innerHTML = donedata[1];
  row.insertCell(2).innerHTML = donedata[2];
  row.insertCell(3).innerHTML = donedata[3];
  row.insertCell(4).innerHTML = `<button onClick = "edit(this)" class = "down-btn">Edit</button>
  <button onClick = "remove(this)" class = "down-btn">Remove</button>`;
}
function edit(td) {
  let newrow = td.parentElement.parentElement;
  document.getElementById("name").value = newrow.cells[0].innerHTML;
  document.getElementById("mobile").value = newrow.cells[1].innerHTML;
  document.getElementById("email").value = newrow.cells[2].innerHTML;
  document.getElementById("address").value = newrow.cells[3].innerHTML;
}

function remove(td) {
  newrow = td.arepntElement.parentElement;
  document.getElementById("storelist").deleteRow(newrow.rowIndex);
}
