const apiRick=async (pagina)=>{
let url="https://rickandmortyapi.com/api/character/?page="+pagina;
const api= await fetch(url);
const data=await api.json();
console.log(data);
divRes=document.querySelector("#resultado");
divRes.innerHTML = ""
data.results.map(item=>{
    divItem = document.createElement('div')
    divItem.innerHTML = `
    <div class="card" style="width: 18px;">
         <img src="${item.image}" class="card-img">
        <div class="card-body">
             <h4 class="card-title">Nombre: ${item.name}</h4>
             <p class="card-text">Estatus: ${item.status}</p>
             <p class="card-text">Especie: ${item.species}</p>
             <p class="card-text">Género: ${item.gender}</p>
        </div>
    </div>
        `
        divRes.appendChild(divItem);

});

}

apiRick(1)


document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.getElementById("elementos").children;
    const elementosPorPagina = 20; 
    let paginaActual = 1;

    function mostrarElementos() {
        for (let i = 0; i <=20; i++) {
            elementos[i].style.display = "none";
        }

        const inicio = (paginaActual - 1) * elementosPorPagina;
        const fin = inicio + elementosPorPagina;

        for (let i = inicio; i < fin; i++) {
            if (elementos[i]) {
                elementos[i].style.display = "block";
            }
        }
    }

    function irAPagina(pagina) {
        if (pagina < 1) {
            pagina = 1;
        } else if (pagina > Math.ceil(elementos.length / elementosPorPagina)) {
            pagina = Math.ceil(elementos.length / elementosPorPagina);
        }

        paginaActual = pagina;
        mostrarElementos();
    }

    const btnAnterior = document.getElementById("anterior");
    const btnSiguiente = document.getElementById("siguiente");

    btnAnterior.addEventListener("click", function () {
        irAPagina(paginaActual - 1);
    });

    btnSiguiente.addEventListener("click", function () {
        irAPagina(paginaActual + 1);
    });

    mostrarElementos();
}); 


let btnPrimeraPagina = document.getElementById("btnPrimeraPagina");
let btnUltimaPagina = document.getElementById("btnUltimaPagina");


function irPrimeraPagina() {
    window.location.href = "pagina";
}

function irUltimaPagina() {
    window.location.href = "pagina";
}


btnPrimeraPagina.addEventListener("click", irPrimeraPagina);
btnUltimaPagina.addEventListener("click", irUltimaPagina);
