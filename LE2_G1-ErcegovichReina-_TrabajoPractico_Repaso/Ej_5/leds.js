const azul = document.getElementById('btna'),
      rojo = document.getElementById('btnr'),
      verde = document.getElementById('btnve');
      
const ledazul = document.getElementById('leda'),
      ledrojo = document.getElementById('ledr'),
      ledverde = document.getElementById('ledve');
let prendidoa = 0, prendidor = 0, prendidove = 0;
azul.addEventListener('click', function() {
    if (prendidoa == 0) {
        ledazul.style.boxShadow = '0px 0px 10px 10px blue';
        azul.value = 'Apagar LED azul';
        console.log("Se prendió el LED azul");
        prendidoa = 1;
    } else if (prendidoa == 1) {
        ledazul.style.boxShadow = 'none';
        azul.value = 'Prender LED azul';
        console.log("Se apagó el LED azul");
        prendidoa = 0;
    }
});

rojo.addEventListener('click', function() {
    if (prendidor == 0) {
        ledrojo.style.boxShadow = '0px 0px 10px 10px red';
        rojo.value = 'Apagar LED rojo';
        console.log("Se prendió el LED rojo");
        prendidor = 1;
    } else if (prendidor == 1) {
        ledrojo.style.boxShadow = 'none';
        rojo.value = 'Prender LED rojo';
        console.log("Se apagó el LED rojo");
        prendidor = 0;
    }
});

verde.addEventListener('click', function() {
    if (prendidove == 0) {
        ledverde.style.boxShadow = '0px 0px 10px 10px green';
        verde.value = 'Apagar LED verde';
        console.log("Se prendió el LED verde");
        prendidove = 1;
    } else if (prendidove == 1) {
        ledverde.style.boxShadow = 'none';
        verde.value = 'Prender LED verde';
        console.log("Se apagó el LED verde");
        prendidove = 0;
    }
});