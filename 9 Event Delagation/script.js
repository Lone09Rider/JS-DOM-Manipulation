// document.querySelector("#football").addEventListener('click', function(e) {
//     console.log("Football is Clicked");

//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = "skyblue";
//     }
// });


// document.querySelector('#basketball').addEventListener('click', function (e) {
//     console.log("BasketBall Clicked");

//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = "brown";
//     }
// });

// document.querySelector('#boxing').addEventListener('click', function(e) {
//     console.log("Boxing is Clicked");

//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = "red";
//     }
// });

// document.getElementById("tennis").addEventListener('click', function (e) {
//     console.log("Tennis is Clicked");

//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = "lightgreen";
//     }
// });

// document.querySelector("#golf").addEventListener('click', function (e) {
//     console.log("Golf is Clicked");

//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = "white";
//         target.style.color = "black";
//     }
// });

// Delegation on Parent for less code

document.querySelector("#sports").addEventListener('click', function (e) {
    console.log(e.target.getAttribute('id')+' is Clicked');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = "black";
        target.style.color = "skyblue";
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerHTML = "Cricket";
sports.appendChild(newSport);