// Mapeo HTML
const BTN_JUGAR = document.getElementById('jugar');
const BTN_COMPROBAR = document.getElementById('comprobar');
const BTN_REINICIAR = document.getElementById('reiniciar');

const RESPUESTA = document.getElementById("respuesta");
const RESULTADO = document.getElementById("resultado"); 
const SELECT_CANTIDAD = document.getElementById('numero');
const NUMEROS = document.getElementById("numeros");

let secuencia = [];
let cantidad;

const comprobar = () => {
    let aciertos = 0;
    
    for (let i = 0; i < cantidad; i++) {
        let valorUsuario = parseInt(document.getElementById("num" + i).value);
        if (valorUsuario === secuencia[i]) {
            aciertos++;
        }
    }

    RESULTADO.innerText = `Aciertos: ${aciertos} de ${secuencia.length}`;
    NUMEROS.style.display = "block"; 
    BTN_COMPROBAR.disabled = true;
}

const mostrarInputsUsuario = () => {
    RESPUESTA.innerHTML = '';
    // Al mostrar los inputs, quitamos la clase hidden
    RESPUESTA.classList.remove('hidden');
    
    for (let i = 0; i < cantidad; i++) {
        let input = document.createElement("input");
        input.type = "number"; 
        input.id = "num" + i;
        input.className = "w-16 border border-gray-400 text-center";
        RESPUESTA.appendChild(input);
    }
    BTN_COMPROBAR.disabled = false;
}

const crearSecuencia = () => {
    secuencia = [];
    NUMEROS.innerHTML = '';
    RESPUESTA.innerHTML = '';
    RESULTADO.innerText = '';
    // Aseguramos que el div esté oculto al empezar
    RESPUESTA.classList.add('hidden');
    
    cantidad = parseInt(SELECT_CANTIDAD.value);

    for (let i = 0; i < cantidad; i++) {
        let num = Math.floor(Math.random() * 501);
        secuencia.push(num);

        let valor = document.createElement("span");
        valor.innerText = num + " ";
        NUMEROS.appendChild(valor);
    }

    setTimeout(() => {
        NUMEROS.style.display = "none";
        mostrarInputsUsuario();
    }, 5000);
}

const nuevoJuego = () => {
    secuencia = [];
    NUMEROS.innerHTML = '';
    NUMEROS.style.display = 'block';
    RESPUESTA.innerHTML = '';
    RESPUESTA.classList.add('hidden'); // Ocultar al reiniciar
    RESULTADO.innerText = '';
    BTN_COMPROBAR.disabled = true;
}

BTN_JUGAR.addEventListener('click', crearSecuencia);
BTN_COMPROBAR.addEventListener('click', comprobar);
BTN_REINICIAR.addEventListener('click', nuevoJuego); 