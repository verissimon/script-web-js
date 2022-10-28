let rmvBotao = document.getElementsByClassName("rmv");
rmvBotao.addEventListener("click",function(){
    alert("clicou remover");
    // element = document.querySelector(".item-lista");
    // element.remove();
    textoNovoItem.removeChild(textoNovoItem);
});