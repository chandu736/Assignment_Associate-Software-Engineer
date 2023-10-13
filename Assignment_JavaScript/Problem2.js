const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a array elements : ',(input)=>{
    const numbers=input.split(' ').map(Number);
    numbers.sort((a,b)=>b-a);
    console.log('sorted array in descending order : '+numbers.join(' '));
    rl.close();
});