// Para criar objetos, usamos {} chaves
// objetos se parecem co Araays, porém utilizam palavras sua posições

var objeto = {} // objeto vazio

var carro = {
    marca: "BYD", // Usa o padrão chave:valor
    modelo: "Seal"
};

// para acessar ou alterar um valor, usamos . (ponto)
console.log("Marca:",carro.marca);

// Adicionar novos elementos no objeto só usar o ponto (.)
carro.ano = 2024;

console.log(carro); // Mostra todo o objeto no console.
// IMPORTANTE: imprimir o array ou objeto inteiro só funciona no console.   