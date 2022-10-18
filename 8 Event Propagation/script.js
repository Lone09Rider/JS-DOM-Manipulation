// Event Propagation

window.addEventListener('click', function(){
    console.log('Window');
}, true);

document.addEventListener('click', function(){
    console.log('Document');
}, true);

document.querySelector(".div2").addEventListener('click', function() {
    console.log("Div 2");
}, true);

document.querySelector(".div1").addEventListener('click', function() {
    console.log("Div 1");
}, true);

document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target.innerText = "clicked");
}, true);