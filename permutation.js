const allPermutations = (str) => {

  //If the input is falsy(empty) or not a string
  if (!str || typeof str !== "string"){
    return "Please enter a string"
  }
  //Else if str has length 1, return str
  else if (str.length < 2){
    return str;
  }
  
  const result = [];
  for(let i = 0; i < str.length; i += 1){
    const eachLetter = str[i];
    const otherLetters = str.slice(0, i) + str.slice(i + 1, str.length);
    for (let permutation of allPermutations(otherLetters)){
      result.push(eachLetter + permutation) }
  }
  return result;
  }
