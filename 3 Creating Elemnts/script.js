//  Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

li.innerHTML = "Death Note";
li.style.backgroundColor = "yellow";
li.style.color = "red";
li.style.listStyle = "none";
li.style.margin = "0%";
li.style.border = "5px solid red";

ul.append(li);


console.log();