import fs from 'fs';
const arquivo = "./formatoTeste.json"

const data = fs.readFileSync(arquivo, 'utf8');

console.log(JSON.parse(data));