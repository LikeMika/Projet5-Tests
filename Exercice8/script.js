//Votre code ici
function add(numb1, numb2) {
  if (typeof numb1 !== 'number' || typeof numb2 !== 'number') {
        //return "Ce ne sont pas des int ou float";
        numb1 = parseFloat(numb1);
        numb2 = parseFloat(numb2);
        return numb1 + numb2;
    }
    else {
        return numb1 + numb2;
    }
}
 export default add;
