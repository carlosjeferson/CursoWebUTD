const cliente = {
    "cpf" : 123456,
    "nome" : "Jefferson",
    "endereco" : {
        "logradouro" : "beira mar",
        "numero" : "79",
        "bairro" : "iracema",
        "cep" : "645489798122"
    }
}

const produto = {
    "codigo" : "9875654213",
    "nome" : "feijão",
    "preco" : 5.99,
    "tipo" : "cereal"
}

console.log(cliente)
console.log(cliente.endereco.logradouro)
console.log(produto)