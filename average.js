
function average(numbers) {
  // return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
  
  // the problem here is that many of the values in `numbers` array can be NaNs
  // as expected from various real world sensors.
  // So the solution is to filter out the NaNs and then calculate the average.
  const realNumbers = numbers.filter(num => !isNaN(num));
  const avg = realNumbers.reduce((p, c) => p+c, 0) / realNumbers.length;
  return avg;
}

module.exports = {average};
