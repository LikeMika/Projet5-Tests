//Votre code ici
function add(numb1, numb2) {
    if (numb1 !== 'number' || numb2 !== 'number') {
        alert("Ce ne sont pas des int ou float")
    }
    else {
        return numb1 + numb2;
    }
}
 export default add;
