module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = new Map(bracketsConfig);

  for (let char of str) {
      if (bracketsMap.has(char)) {
          const isSame = bracketsMap.get(char) === char;
          if (isSame && stack.includes(char)) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else {
          const openingBracket = [...bracketsMap.keys()].find(key => bracketsMap.get(key) === char);
          if (openingBracket && stack.pop() !== openingBracket) {
              return false;
          }
      }
  }
  
  return stack.length === 0;
}
