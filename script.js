// menubar
    function openFunction(){
    document.getElementById('sidebar').style.width=' 200px'
}
    function closeFunction(){
    document.getElementById('sidebar')//.style.width='0px'
}
addEventListener('mouseup', function (event) {
    var box = document.getElementById('sidebar');
    if (event.target != box) {
        box.style.width = '0px';
    }
})
// increment decrement
let incrementButtons = document.querySelectorAll(".plus");
let decrementButtons = document.querySelectorAll(".moins");
let numberDisplays = document.querySelectorAll(".num");

function incrementNumber(index) {
    let number = parseInt(numberDisplays[index].textContent);
    number++;
    numberDisplays[index].textContent = number;
}

function decrementNumber(index) {
    let number = parseInt(numberDisplays[index].textContent);
    if (number > 1) {
        number--;
        numberDisplays[index].textContent = number;
    }
}

incrementButtons.forEach((button, index) => {
    
    button.addEventListener("click", () => {
        incrementNumber(index);
    });
});

decrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        decrementNumber(index);
    });
});
//    toggle
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartContent = document.getElementById('car-shop');

    cartIcon.addEventListener('click', function (event) {
        event.preventDefault();
         // Empêche le comportement par défaut d'un lien

        if (cartContent.style.display === 'none') {
            cartContent.style.display = 'block';
        } else {
            cartContent.style.display = 'none';
        }
    });
});

