function cariAngkaHilang(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  for (let i = min; i <= max; i++) {
    let ketemu = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        ketemu = true;
        break;
      }
    }
    if (!ketemu) return i;
  }

  return null;
}

console.log(cariAngkaHilang([1, 0, 2, 4])); 
console.log(cariAngkaHilang([3106, 3102, 3104, 3105, 3107]));
