function zeros (n) {
  let total = 0;
  let number = n;
  while(number >= 5){
    number = Math.floor(number/5);
    total += number;
  };
  return total;
}