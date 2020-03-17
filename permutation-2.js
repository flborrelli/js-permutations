const allPermutation = str => {
  if (!str || typeof str !== "string") {
    return "Invalid input. Please enter a string";
  } else if (str.length < 2) {
    return str;
  }

  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    const eachLetter = str[i];
    if (str.indexOf(eachLetter) !== i) continue;
    const remainingLetters = str.slice(0, i) + str.slice(i + 1);
    result.push(eachLetter);
    const permutation = allPermutation(remainingLetters);
    for (let j = 0; j < permutation.length; j += 1) {
      result.push(eachLetter + permutation[j]);
    }
  }
  return result.sort((a, b) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
  });
};
