// Event listeners


// element.addEventListener("click", function);


const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert("Don't Click Me");
};

buttonTwo.addEventListener("click", alertBtn);

const buttonThree = document.querySelector('.box-3');

function btnBackground()
{
    buttonThree.style.backgroundColor = "Blue";
}

buttonThree.addEventListener('mouseover', btnBackground);
