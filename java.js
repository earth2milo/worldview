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
btn.addEventListener("mouseover", function() {

    btn.style.border = "10px solid black";

});
btn.addEventListener("mouseout", function() {

    btn.style.border = "none";

});

btn.addEventListener("click", function() {
    wow.style.display="flex";
    wow.style.position="absolute";
    wow.style.top="40%";
    wow.style.right="20%";
    wow.style.marginLeft="20%";
    wow.style.marginRight="30%";
    wow.style.fontFamily ="Rubik Puddles, cursive";
    wow.style.textShadow ="10px, 5px, #2F4F4F";
    wow.style.color = "#FF6347";
    wow.style.fontSize="15px";
    
   

});


function hide() {
    wow.style.display="flex";
}
