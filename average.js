
function average(numbers) {
  // return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
  const realNumbers = numbers.filter(num => !isNaN(num));
  const avg = realNumbers.reduce((p, c) => p+c, 0) / realNumbers.length;
  return avg;
}

module.exports = {average};
