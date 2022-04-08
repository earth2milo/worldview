function myFunction()
{
    document.getElementById("textflow").createElement("a");
}

var btn = document.createElement("button");
btn.innerHTML = "Milo's Portfolio <br> PRESS TO START";
btn.display = "flex";
btn.style.position="absolute";
btn.style.top = "30%";
btn.style.right ="45%";
document.body.appendChild(btn);


var text = document.getElementById("wow"); 
var bioText= document.getElementById("bio");
btn.addEventListener("mouseover", function() {

    btn.style.border = "10px solid black";

});
btn.addEventListener("mouseout", function() {

    btn.style.border = "none";

});

btn.addEventListener("click", function() {
    text.style.display="flex";
    text.style.position="absolute";
    text.style.top="40%";
    text.style.right="20%";
    text.style.marginLeft="20%";
    text.style.marginRight="30%";
    text.style.fontFamily ="Rubik Puddles, cursive";
    text.style.textShadow ="10px, 5px, #2F4F4F";
    text.style.color = "#FF6347";
    text.style.fontSize="15px";
    
    bioText.style.display="flex";
    bioText.style.position="absolute";
    bioText.style.top="45%";
    bioText.style.right="20%";
    bioText.style.marginLeft="20%";
    bioText.style.marginRight="30%";
    bioText.style.fontFamily ="Rubik Puddles, cursive";
    bioText.style.textShadow ="10px, 5px, #2F4F4F";
    bioText.style.color = "#FF6347";
    bioText.style.fontSize="15px";


    
   

});


function hide() {
    wow.style.display="flex";
}
