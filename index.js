// - Variáveis
let nome = "Superman"
let quantidadeXp = 10045
let nivel = ""

// - Operadores e Estruturas de decisões
if (quantidadeXp <= 1000) {
    nivel = "Ferro";
} else if (quantidadeXp >= 1001 && quantidadeXp <= 2000) {
    nivel = "Bronze"
} else if (quantidadeXp >= 2001 && quantidadeXp <= 5000) {
    nivel = "Prata"
} else if (quantidadeXp >= 5001 && quantidadeXp <= 7000) {
    nivel = "Ouro"
} else if (quantidadeXp >= 7001 && quantidadeXp <= 8000) {
    nivel = "Platina"
} else if (quantidadeXp >= 8001 && quantidadeXp <= 9000) {
    nivel = "Ascendente"
} else if (quantidadeXp >= 9001 && quantidadeXp <= 10000) {
    nivel = "Imortal"
} else if (quantidadeXp >= 10001) {
    nivel = "Radiante"
}

// Saída
console.log("O Herói de nome " + nome + " está no nível de " + nivel + ".");
console.log('-'.repeat(40))


// USANDO LAÇOS DE REPETIÇÃO
// - Listas
let herois = [
    { nome: "Homem Aranha", quantidadeXp: 7542 },
    { nome: "Hulk", quantidadeXp: 3445 },
    { nome: "Batman", quantidadeXp: 8955 },
    { nome: "Mulher Maravilha", quantidadeXp: 9542 },
];

// Laço de repetição
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let quantidadeXp = herois[i].quantidadeXp;
    let nivel = "";

    // - Operadores e Estruturas de decisões
    if (quantidadeXp <= 1000) {
        nivel = "Ferro";
    } else if (quantidadeXp >= 1001 && quantidadeXp <= 2000) {
        nivel = "Bronze"
    } else if (quantidadeXp >= 2001 && quantidadeXp <= 5000) {
        nivel = "Prata"
    } else if (quantidadeXp >= 5001 && quantidadeXp <= 7000) {
        nivel = "Ouro"
    } else if (quantidadeXp >= 7001 && quantidadeXp <= 8000) {
        nivel = "Platina"
    } else if (quantidadeXp >= 8001 && quantidadeXp <= 9000) {
        nivel = "Ascendente"
    } else if (quantidadeXp >= 9001 && quantidadeXp <= 10000) {
        nivel = "Imortal"
    } else if (quantidadeXp >= 10001) {
        nivel = "Radiante"
    }

    // Saída

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
}