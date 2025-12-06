function getValue(array, key) {
  let countries = [];

  for (let i = 0; i < array.length; i++) {
    countries.push(array[i][key]);
  }
  return countries;
}

export default getValue

