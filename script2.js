// let data = [
//     {name :"himanshu", mobile: "4214331", email: "321532523", address: "52323f"},
//     {name :"himansbefhfe", mobile: "4214gbgbef", email: "32153hntejhnet2523", address: "5232jetjte3f"},

// ]
// function readData(){
//     data = read();
//     localStorage.setItem("object",JSON.stringify(data));
//     let tabledata = document.getElementById("data-table");
//     let object = localStorage.getItem("object");
//     let objectdata = JSON.parse(object);
//     let table = document.getElementById("storelist");

//     html+= 


//  let row = table.insertRow();
// row.insertCell(0).innerHTML = objectdata["name"];
// row.insertCell(1).innerHTML = objectdata["mobile"];
// row.insertCell(2).innerHTML = objectdata["email"];
// row.insertCell(3).innerHTML = objectdata["address"];
// row.insertCell(4).innerHTML = `<button onClick = "edit(this)" class = "down-btn">Edit</button>
// <button onClick = "remove(this)" class = "down-btn">Remove</button>`;

// }
// // function validation(){
    
// //     if(localStorage.getItem("users") === null){
// //        localStorage.setItem("users", EnteredData);
// //     //    
// //     }
// //     else{
// //         EnteredData = JSON.parse(localStorage.getItem("users"));
// //     }
// // }
// // //     else{
// // //         let EnteredData = [];
       
// // //     }
// // // }
// function readData(){
//     let EnteredData = {};
//     EnteredData = read();
//     let data = [];
//     data = EnteredData;

//     localStorage.setItem("users",JSON.stringify(data));

// //     validation();

// // EnteredData = read();
// // console.log(EnteredData);

// // // EnteredData.push(read());

// // let data = EnteredData.push(read());




// //  localStorage.setItem("users", data);
// // //  data= localStorage.getItem("users");
// // // JSON.parse(data);
// // // insertData(data);
// // // console.log(data);
function readData(){
let users;
    if(localStorage.getItem("users") == null){
        users = [];
    }
    else{
        users = JSON.parse(localStorage.getItem("users"));
    }
let table = document.getElementById("storelist");
let row = table.insertRow();
row.insertCell(0).innerHTML = users.name;
row.insertCell(1).innerHTML = users.mobile;
row.insertCell(2).innerHTML = users["email"];
row.insertCell(3).innerHTML = users["address"];
row.insertCell(4).innerHTML = `<button onClick = "edit(this)" class = "down-btn">Edit</button>
<button onClick = "remove(this)" class = "down-btn">Remove</button>`;
}

// // // localStorage.setItem("users",JSON.stringify(EnteredData));
// // // console.log(EnteredData);
// // // localStorage.getItem("users",JSON.parse("users"));
// // // console.log(EnteredData);

// }
function read(){
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    let users;
    if(localStorage.getItem("users") == null){
        peoplelist = [];
    }
    else{
        usres = JSON.parse(localStorage.getItem("users"));
    }
    users.push({
        name : name,
        mobile : mobile,
        email : email,
        address : address,
    });
    localStorage.setItem("users", JSON.stringify(users));
    readData();
}
// // // function insertData(data) {
   
// // //   }
