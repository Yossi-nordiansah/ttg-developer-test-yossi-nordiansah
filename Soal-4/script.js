function permute(arr) {
  if (arr.length === 1) return [arr];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(0, i).concat(arr.slice(i + 1));
    for (let p of permute(rest)) {
      result.push([arr[i], ...p]);
    }
  }
  return result;
}

function cariEkspresiDenganKurung(nums, target) {
  function generate(arr, start, end) {
    if (start === end) return [arr[start].toString()];
    let result = [];
    for (let i = start; i < end; i++) {
      let leftParts = generate(arr, start, i);
      let rightParts = generate(arr, i + 1, end);
      for (let l of leftParts) {
        for (let r of rightParts) {
          for (let op of ["+", "-", "*"]) {
            result.push(`(${l}${op}${r})`);
          }
        }
      }
    }
    return result;
  }

  let semuaEkspresi = [];
  for (let angka of permute(nums)) {
    let ekspresi = generate(angka, 0, angka.length - 1);
    for (let exp of ekspresi) {
      try {
        if (eval(exp) === target) {
          semuaEkspresi.push(exp);
        }
      } catch (e) {}
    }
  }

  return semuaEkspresi.length ? [...new Set(semuaEkspresi)] : null;
}

console.log("Target 16:", cariEkspresiDenganKurung([1, 4, 5, 6], 16));
console.log("Target 18:", cariEkspresiDenganKurung([1, 4, 5, 6], 18));
console.log("Target 50:", cariEkspresiDenganKurung([1, 4, 5, 6], 50));
