// ===============================
// MINHA RAINHA DE ROXO
// SCRIPT
// ===============================

const intro = document.getElementById("intro");
const capa = document.getElementById("capa");
const livro = document.getElementById("livro");

const entrar = document.getElementById("entrar");
const abrirLivro = document.getElementById("abrirLivro");

// Entrar na capa

entrar.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";
        capa.style.display = "flex";

    },700);

});

// Abrir o livro

abrirLivro.addEventListener("click", () => {

    capa.style.opacity = "0";

    setTimeout(() => {

        capa.style.display = "none";
        livro.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },700);

});

// Animação das páginas

const paginas = document.querySelectorAll(".pagina");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:0.15});

paginas.forEach((pagina)=>{

pagina.style.opacity="0";
pagina.style.transform="translateY(70px)";
pagina.style.transition=".8s";

observer.observe(pagina);

});

// Efeito nas fotos

const fotos = document.querySelectorAll(".fotoLivro");

fotos.forEach((foto)=>{

foto.addEventListener("click",()=>{

if(foto.classList.contains("zoom")){

foto.classList.remove("zoom");

}else{

foto.classList.add("zoom");

}

});

});

// Mensagem final

window.addEventListener("scroll",()=>{

if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-10){

console.log("Fim do livro ❤️");

}

});