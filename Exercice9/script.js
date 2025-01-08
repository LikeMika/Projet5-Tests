// votre code ici
function checkAge(age)
{
    if (age < 18)
    {
        alert("vous êtes mineur");
    }
    else if(age >= 18 && age <= 65)
    {
        alert("Vous êtes majeur");
    }
    else {
        alert("vous êtes senior");
    }
}
export default checkAge;
