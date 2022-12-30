var list_area = document.getElementById("list");
var input = document.getElementById("input");
var add_btn = document.getElementById("add_btn");
var  clear_btn = document.getElementById("clear_btn");

add_btn.addEventListener("click", add_value);
clear_btn.addEventListener("click", clear_all);

function add_value(){

    var li =document.createElement("li");
    li.innerText = input.value;
    list_area.appendChild(li);

    input.value = "";
}

function clear_all(){
  
    while (list_area.hasChildNodes){
        list_area.removeChild(list_area.firstChild);
    }
}


