
const bannedWords = [ '123', '321' ];

function validateText(text) {
	// code here
  const regexp123 = new RegExp(`${bannedWords[0]}`, 'g');
  const regexp321 = new RegExp(`${bannedWords[1]}`, 'g');
  let str = text.replace(regexp123, ',123,');
  str = str.replace(regexp321, ',321,');
  str = str.trim().replace(/\s+/g, ' ');
  str = str.replace(/^\,/, '').replace(/\,$/, '');
  str = str.replace(/\,\,/g, ',');
  const arr = str.split(',');
  if (text[0] === ' ') {
    arr.unshift(' ');
  }
  if (text[text.length - 1] === ' ') {
    arr.push(' ');
  }
  arr.forEach((el, index, arr) => {
    if (el === bannedWords[0] || el === bannedWords[1]) {
      arr[index] = `<BannedWordComponent>${arr[index]}</BannedWordComponent>`;
    }
  });

  return arr;
}

module.exports = {
	validateText,
};