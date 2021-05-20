var button = document.getElementsByTagName("button")[0];
var input = document.getElementsByTagName("input")[0];
var ul = document.getElementsByTagName("ul")[0];
var listElements = document.getElementsByTagName("li");

function TheEvent(){
    if(input.value !== ""){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        listElements = document.getElementsByTagName("li");
        something();
    }
    else{
        console.log("Dont type empty shit you fool");
    }
}

button.addEventListener("click", TheEvent);

input.addEventListener("keypress", function(){
    if(event.keyCode === 13){
        console.log("skhdkj");
        TheEvent();
    }    
});

function boom(){
    var elm = event.path[0];
    elm.classList.toggle("poof");
}

function something(){
    for(var i = 0; i < listElements.length; i++){
        var element = listElements[i];
        element.addEventListener('click', boom); 
    }
}

something();