//votre code ici
function printNumbers(n)
{
let numbers = [];
for (let i = 1; i < n+1; i++) {
    numbers.push(i);
}
console.log(numbers.join(" "));
return numbers.join(" ");
}
//printNumbers(10)
export default printNumbers;
