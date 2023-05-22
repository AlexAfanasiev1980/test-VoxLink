
function isValidSubsequence(array, sequence) {
    // code here
    if (sequence.length === 0 || array.length === 0) {
        return false;
      }
    
      let arr = array.filter((el) => {
        for (let i = 0; i < sequence.length; i++) {
          if (el === sequence[i]) {
            return true;
          }
        }
      });
    
      for (let i = 0; i < sequence.length; i++) {
        if (arr[i] !== sequence[i]) {
          return false;
        }
      }
      return true;
}

module.exports = {
    isValidSubsequence,
};
