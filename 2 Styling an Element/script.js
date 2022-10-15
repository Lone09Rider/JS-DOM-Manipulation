// DOM Manipulation

const title = document.querySelector("#main-heading");

title.style.color = "orange";

console.log(title);

//  To select all
const liItems = document.querySelectorAll(".list-items");

// Below code only works for first not all the items 
// liitems.style.fontSize = "2rem"; 

// To work on all Items 
for (var i = 0; i<liItems.length; i++)
{
    liItems[i].style.fontSize = "2rem";
}

console.log(liItems);