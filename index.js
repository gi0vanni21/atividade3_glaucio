let alturas = [];
let generos = [];

for (let i = 1; i <= 15; i++) {
  let altura = parseFloat(prompt(`Digite a altura da ${i}ª pessoa (em metros):`));
  let genero = prompt(`Digite o gênero da ${i}ª pessoa (Masculino/Feminino):`).trim().toLowerCase();

  alturas.push(altura);
  generos.push(genero);
}


let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);


let somaMasculino = 0;
let qtdMasculino = 0;

for (let i = 0; i < alturas.length; i++) {
  if (generos[i] === "masculino") {
    somaMasculino += alturas[i];
    qtdMasculino++;
  }
}

let mediaMasculino = qtdMasculino > 0 ? (somaMasculino / qtdMasculino) : 0;


let qtdFeminino = generos.filter(g => g === "feminino").length;


alert(`=== Resultados ===
    
Maior altura do grupo: ${maiorAltura.toFixed(2)} m
Menor altura do grupo: ${menorAltura.toFixed(2)} m
Média de altura dos homens: ${mediaMasculino.toFixed(2)} m
Número de mulheres: ${qtdFeminino}`);
