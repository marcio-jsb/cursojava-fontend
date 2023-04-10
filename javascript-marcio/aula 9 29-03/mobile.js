//retorna o 1st elemento do doc com o seletor(ou grupo de sel)
const menuUl = document.querySelector(".nav-ul");
// retorna uma lista de elementos levando em conta a ordenção em profundiade
const menuLis = document.querySelectorAll(".nav-item");
const hamburguer = document.querySelector(".toggle-nav");
const abrir = document.querySelector(".btnabrir");
const fechar = document.querySelector(".btnclose");

function toggleMenu(){
    if(menuUl.classList.contains("mostrarmenu")){
    menuUl.classList.remove("mostrarmenu");
    fechar.style.display = "none"; 
    abrir.style.display = "block";     
    }else {
    menuUl.classList.add("mostrarmenu");
    fechar.style.display = "block"; 
    abrir.style.display = "none";   
    }
}
hamburguer.addEventListener("click", toggleMenu);