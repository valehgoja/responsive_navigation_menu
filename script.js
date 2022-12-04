let icon = document.querySelector("#icon");
let ul = document.querySelector("ul");
icon.addEventListener("click",function(){
    if(ul.className == ""){
    ul.className = "show";}
    else{
        ul.className="";
    }
})