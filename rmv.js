let rmvBotao = document.querySelectorAll('rmv');
rmvBotao.onclick = function() {
    alert("clicou remover");
    element = document.querySelector(".item-lista");
    element.remove();
};