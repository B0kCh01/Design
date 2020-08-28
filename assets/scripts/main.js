var enable = false;
var element = document.getElementById("selector");

if (!enable) {
    element.classList.add("selected");
} 
else {
    element.classList.remove("selected"); 
}

function click() {
    if (enable) {
        element.classList.add("selected");
    }
    else {
        element.classList.remove("selected");
    }
    enable = !enable;
}