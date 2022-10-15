// Traverse DOM

//1. Parent Node Traversal
let ul = document.querySelector('ul');
console.log(ul);
console.log(ul.parentNode); // First Div (Parent)
console.log(ul.parentElement); // First Div (Parent)
console.log(ul.parentNode.parentNode); // Div Parent - Body (Grand Parent)
console.log(ul.parentElement.parentElement); // Div Parent - Body (Grand Parent)

// ParentNode is Mostly Used
const html = document.documentElement;
console.log(html.parentElement);
console.log(html.parentNode);
console.log("----------------------------------");

//2. Child Node Traversal
console.log(ul.childNodes);
console.log(ul.childElementCount);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

ul.childNodes[1].style.backgroundColor = "brown";
console.log("----------------------------------");

//3. Sibling Node Traversal
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling); // null cause nothing after ul