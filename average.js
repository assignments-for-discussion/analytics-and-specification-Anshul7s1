
function average(numbers) {
  // return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
  const real_numbers = numbers.filter(num => !isNaN(num));
  const avg = real_numbers.reduce((p, c) => p+c, 0) / real_numbers.length;
  return avg;
}

module.exports = {average};
