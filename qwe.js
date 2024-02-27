for (let i = 10; i <= 1000; i++) {
  let numberAsString = i.toString();
  if (Number(numberAsString[0]) + Number(numberAsString[1]) === 5) {
    console.log(i);
  }
}
