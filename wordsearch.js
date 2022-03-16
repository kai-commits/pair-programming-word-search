const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  } 

  const horizontalJoin = letters.map((ls) => ls.join(""));
  
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  const verticalSearch = (letters) => {
    let returnArr = [];
    for (let i = 0; i < letters[0].length; i++) {
      let newRow = [];
      for (let j = 0; j < letters.length; j++) {
        newRow.push(letters[j][i]);
      }
      returnArr.push(newRow);
    }
    return returnArr.map((ls) => ls.join(""));
  }
  
  const verticalJoin = verticalSearch(letters);

  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
