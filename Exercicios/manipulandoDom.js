const root = document.getElementById('root');

const linguagem = "Js";

root.innerHTML = `Manipulando DOM com ${linguagem}`;

document.getElementById('executar').addEventListener('click', ()=>{
    const musica = document.getElementsByName('musica')[0].value;

    const lista = document.getElementById('lista');

    const item = document.createElement('li');

    item.innerText = musica;

    lista.appendChild(item);
})

document.getElementById('excluir').addEventListener('click', ()=>{
    const lista = document.getElementById('lista');

    lista.removeChild(lista.children[0]);

    console.log(lista.children)
    
});

document.getElementById('limpar').addEventListener('click', ()=>{
    const lista = document.getElementById('lista');
    
    lista.innerHTML = '';
})