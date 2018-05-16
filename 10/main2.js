function kdigits(n, k) {
  const numArray = Array.from([...n.toString()], x => Number(x))
    .sort((a, b) => a - b)
    .slice(0, n.toString().length - k);
  if (
    numArray.length === 0 ||
    Math.min(...numArray) === Math.max(...numArray)
  ) {
    return console.log("Aucun K nombre détécté");
  }

  if (numArray.length < k) {
    throw new Error(
      "Attention, votre nombre d'extraction est plus grand que le nombre"
    );
  }
  console.log(numArray);
  if (k > 1) {
    return numArray.splice(0, k);
  } else if (k === 1) {
    return numArray[0] === 0 ? numArray[1] : numArray[0];
  }
}
