let username = document.querySelector('#username');
let btn = document.querySelector('#button');
let form = document.querySelector('form');

let arr = [];

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    addInput();
    outPut();
})
function addInput(){
    console.log(username.value);
    arr.push(username.value);
    username.value = "";
}
function outPut(){
    let output = document.querySelector('#output');
    output.innerHTML = '';
    arr.forEach((element, index)=>{
       output.innerHTML += `<ul><li>${element}<button onclick="deleteItem(${index})">Delete</button></li></ul>`;
    });
    
}
function deleteItem(index){
    arr.splice(index, 1);
    outPut();
}