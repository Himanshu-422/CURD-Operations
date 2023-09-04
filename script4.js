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
users.forEach(function(element,index)  {
    users_data += "<tr>";
    users_data += "<td>" + element.name + "</td>";
    users_data += "<td>" + element.mobile + "</td>";
    users_data += "<td>" + element.email + "</td>";
    users_data += "<td>" + element.address + "</td>";
    users_data += `<td><button onClick = "remove(`+index+`)" class = "btn-remove">Delete</button><button onclick="updatedata(`+ index +`)" class = "btn-update">Edit</button>`;
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
function remove(index){
    let users;
    if(localStorage.getItem("users") == null){
        users = [];
    }
    else{
        users = JSON.parse(localStorage.getItem("users"));
    }
    users = JSON.parse(localStorage.getItem("users"));
   
    users.splice(index,1);
       
    localStorage.setItem("users",JSON.stringify(users));
    // localStorage.setItem("users".JSON.stringify(users));
    allData();
}
function updatedata(index){
    document.getElementById("btn-submit").style.display = "none";
    document.getElementById("btn-update").style.display = "block";
    let users;
    if(localStorage.getItem("users") == null){
        users = [];
    }
    else{
        users = JSON.parse(localStorage.getItem("users"));
    }
    document.getElementById("name").value = users[index].name;
    document.getElementById("mobile").value = users[index].mobile;
    document.getElementById("email").value = users[index].email;
    document.getElementById("address").value = users[index].address;
    
    document.getElementById("btn-update").onclick = function(){
        if(validation() == true){
            users[index].name = document.getElementById("name").value;
            users[index].mobile = document.getElementById("mobile").value;
            users[index].email = document.getElementById("email").value;
            users[index].address = document.getElementById("address").value;
            
            localStorage.setItem("users", JSON.stringify(users));
            allData();
            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";

            document.getElementById("btn-submit").style.display = "block";
            document.getElementById("btn-update").style.display = "none";
        }
    }

}