function validation(){
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    if(name == ""){
        alert("Name is required !!!");
        return false;
    }
    if(mobile == ""){
        alert("Mobile No. is required !!!");
        return false;
    }
    if(email == ""){
        alert("Email is required !!!");
        return false;
    }
    if(address == ""){
        alert("address is required !!!");
        return false;
    }
return true;
}
function allData(){
    let users;
    if(localStorage.getItem("users") == null){
        users = [];
    }
    else{
        users = JSON.parse(localStorage.getItem("users"));
    }


let users_data = "";
users.forEach(function(element,Index)  {
    users_data += "<tr>";
    users_data += "<td>" + element.name + "</td>";
    users_data += "<td>" + element.mobile + "</td>";
    users_data += "<td>" + element.email + "</td>";
    users_data += "<td>" + element.address + "</td>";
    users_data += `<td><button onClick = "remove(Index)" class = "btn-remove">Delete</button><button onClick="updatedata(`+ Index +`)" class = "btn-update">Edit</button>`;
    users_data += "</tr>";
  });
  document.getElementById("data-table").innerHTML= users_data;
}

document.onload = allData();
function addData(){
    if(validation() == true){
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    
    let users;
    if(localStorage.getItem("users") == null){
        users = [];
    }
    else{
        users = JSON.parse(localStorage.getItem("users"));
    }
    
    users.push({
        name : name,
        mobile : mobile,
        email : email,
        address : address,
    });
    localStorage.setItem("users", JSON.stringify(users));
    allData();
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
}}

function remove(Index) {
    let users;
    if(localStorage.getItem("users") == null){
        users = [];
    }
    else{
        users = JSON.parse(localStorage.getItem("users"));
    }
    users = JSON.parse(localStorage.getItem("users"));
    users.splice(Index, 1);
//  users = td.parentElement.parentElement.remove();
    

   
    localStorage.setItem("users", JSON.stringify(users));
    addData();

    // newrow = document.getElementById("data-table");
    // document.getElementById("data-table").deleteRow(newrow.rowIndex);
  }

