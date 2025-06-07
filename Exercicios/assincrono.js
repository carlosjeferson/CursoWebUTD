async function endereco() {
    const dado = await fetch('https://viacep.com.br/ws/01001000/json/');

    const end = await dado.json();

    console.log(end);
}

endereco();

const letra = async (banda,musica)=>{
    const resposta = await fetch(`https://api.lyrics.ovh/v1/${banda}/${musica}`);

    const dado = await resposta.json();

    console.log(dado);
}

letra('capital inicial', 'fogo')