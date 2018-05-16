/** 
 * FizzBuzz function
 Écrire une fonction prenant en argument un nombre qui retourne une chaîne de caractères (string).
 
 Pour les multiples de 3, la chaîne retournée sera “Fizz”.
 Pour les multiples de 5, la chaîne retournée sera “Buzz”.
 Pour les multiples de 3 et 5, la chaîne retournée sera “FizzBuzz”.

 Si ce dernier n’est ni un multiple de 3, ni un multiple de 5, 
 on retournera le nombre
 
 Bonus: Si l'argument nombre n'est pas un nombre, on retournera null

 Astuce: Savoir si un nombre est multiple peut s'écrire avec le symbole Modulo noté "%"
 */
function FizzBuzz(nombre) {
  if (isNaN(nombre)) {
    return null;
  }

  const multipleOf3 = nombre % 3 == 0;
  const multipleOf5 = nombre % 5 == 0;

  if (multipleOf3 && multipleOf5) {
    return "FizzBuzz";
  } else if (multipleOf5) {
    return "Buzz";
  } else if (multipleOf3) {
    return "Fizz";
  }

  return nombre;
}

module.exports = FizzBuzz;
