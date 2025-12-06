import getValue from "../modules/getvalue";




// import { v4 as uuidv4 } from "../node_modules/uuid";

// const randomId = uuidv4();
// console.log(randomId);

// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// notyf.success();
      // notyf.error();
      // notyf.warning();
    //   document.querySelector(".success").addEventListener("click", () => {
    //     notyf.success();
    //   });
    //   document.querySelector(".error").addEventListener("click", () => {
    //     notyf.warning();
//   });
    

// const greeter = require("./app.js");
// console.log(greeter);

// ECMAscript
const countryData = [
    {
        id: 11,
        country: 'Germany',
        city: 'Rheinbrohl',
    },
    {
        id: 12,
        country: 'Poland',
        city: 'Koszalin',
    },
    {
        id: 13,
        country: 'Qatar',
        city: 'Doha'
    },
    {
        id: 14,
        country: 'Czech',
        city: 'Kolin'
    }
];

// let countries = [];

// for(let i = 0; i  < countryData.length; i++) {
//     countries.push(countryData[i]["country"]);
// }

// console.log(countries);

// function getValue(array, key) {
//   let countries = [];

//   for (let i = 0; i < array.length; i++) {
//     countries.push(array[i][key]);
//   }
//   return countries
// }


// const countriesList = getValue(countryData, 'country');
// console.log(countriesList);

const countriesList = getValue(countryData, "country");
