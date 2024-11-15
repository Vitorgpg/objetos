var produtos = [];

var i = 0;
var condicao = 1;

while(condicao){
    // Cria o porduto vazio que vamos prencher
    var produto = {};


produto.codigo = i+1; // Como o i começa em zero, aumentamos 1;
produto.nome = prompt("Digite o nome do produto:");
produto.preco = parseFloat(prompt("Digite o preço do produto:"));

produtos[i] = produto;

condicao = parseInt(prompt("Digite 1 para adicionar mais produtos \n Digite 0 para SAIR"));

i++
}

//console.log(produtos);
//console.log(produtos[1].nome);

console.log("--- PRODUTOS CADASTRADOS ---");
for (var i = 0; i < produtos.length; i++) {
    console.log("Código: ", produtos[1].código);
    console.log("Nome", produtos.nome);
    console.log("Preço",produto.preco);
    console.log(" ---- ");
}