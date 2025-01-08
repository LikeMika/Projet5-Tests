//votre code ici
function printNumbers(n)
{
let numbers = [];
for (let i = 0; i < n; i++) {
    numbers.push(i);
}
console.log(numbers.join(" "));
alert(numbers.join(" "));
}
//printNumbers(10)
export default printNumbers;
