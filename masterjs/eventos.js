let boton = document.querySelector("#boton");

function cambiarColor() {
    console.log("object");
    let bg = boton.style.background;
    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }

}
//evento click
boton.addEventListener('click', function() {
    cambiarColor();
});

//mouse over
boton.addEventListener('mouseover', function() {
    console.log('tachas');
})

//mouse out
boton.addEventListener('mouseout', function() {
    console.log('y perico');
})

//focus
let input = document.querySelector('#campoNombre');
input.addEventListener('focus', function() {
    console.log('y focus');
})

//blur
input.addEventListener('blur', function() {
    console.log('y blur');
})


//keydown


//keyup