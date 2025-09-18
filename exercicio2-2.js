let numeros = [10, 20, 30];

numeros.push(40);

numeros.unshift(5);

let ultimo = numeros.pop();

let primeiro = numeros.shift();

console.log("Array final:", numeros);
console.log("Removido do final:", ultimo);
console.log("Removido do início:", primeiro);