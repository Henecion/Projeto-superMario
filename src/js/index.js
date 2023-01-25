/*
Sempre que for fazer a parte do javascript, pensar no que vai
fazer, passo a passo, que nem os itens abaixo.

OBJETIVO 1 - quando o usuário clicar no botão de ver o trailer,
devemos abrir a modal com o video do trailer.
     
    - Passo 1 - dar um jeito de pegar o elemento que representa 
      o botão na tela usando o js
    - Passo 2 - dar um jeito de indentificar quando o usuário 
      clicar no botão
    - Passo 3 - dar um jeito de pegar o lemento da modal no js
    - Passo 4 - abrir a modal na tela  

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal.
    - Passo 1 - dar um jeito de pegar o elemento de fechar modal 
      usando js
    - Passo 2 - dar um jeito de identificar quando o usuário clicar
      no X
    - Passo 3 - fechar modal     
*/


const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src", linkDoVideo)  
});

botaoFecharModal.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src", "");
});





