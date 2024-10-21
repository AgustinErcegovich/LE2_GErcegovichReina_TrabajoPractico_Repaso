const brillo = document.getElementById("brillo");
const des = document.getElementById("d");
const led = document.querySelector(".LED"); 

function deslizador() {
    des.textContent = brillo.value; 
    let c = brillo.value / 255; 
    led.style.backgroundColor = `rgba(255, 0, 0, ${c})`;
    led.style.boxShadow = `0 0 20px rgba(255, 0, 0, ${c})`;
}

deslizador(); 