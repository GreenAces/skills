"use strict";  // tells browser to use the lastest feature of JavaScript and prevents studid errors.


/*
practice with arrow functions which is part of ES6 and learning about higher order functions regarding arrays
for additional notes, please refer to the youtube video "javascript higher order functions & arrays" by Traversy Media
Date: 9/11/2019 -- no changes

*/


// arrow functions don't require any brackets, but you can put arguments inside the parenthesis NOTE: this arrow function has no name.
() => x+2;

console.log("-------------------new line of code()-------------------------");
// this arrow function takes an argument and returns the same argument
let getA = a => a;

console.log(getA(5));
console.log("------------------new line of code(2)-------------------------");
// below is another way of writing the above arrow function (best way) NOTE: when you decide to use brackets, you need to use the return keyword


const a = 4;
let square = () => {return a*a};

console.log(square()); // output 16
console.log("------------------new line of code(3)-------------------------");


const c = 3;
const g = 4;

let multiply = () => {return c*g};

console.log(multiply());
console.log("------------------new line of code(4)-------------------------");

// array # 1
const hotChicks = [
  {Name: "Jessica", Sign: "Leo", Born: 1987, CurrentYear: 2019, Type: "fire", Mood: "happy", FavoriteFood: "bagels"},
  {Name: "Rebecca", Sign: "Libre", Born: 1991, CurrentYear: 2019, Type: "ground", Mood: "angry", FavoriteFood: "shrimp"},
  {Name: "Suzanna", Sign: "Pisces", Born: 1996, CurrentYear: 2019, Type: "water", Mood: "happy", FavoriteFood: "pasta"},
  {Name: "Stacy", Sign: "Aries", Born: 1985, CurrentYear: 2019, Type: "fire", Mood: "happy", FavoriteFood: "spanich"}

];

// array # 2
const ages = [20, 15, 13, 11, 12, 16, 23, 99, 77, 79];

// array # 3

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Post Office", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Home Depot", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "FedEx", category: "Retail", start: 1981, end: 1989}
];

let pokemonType = [{Type: "fire", pokemonName: "Charmander", isSelected: false },
                   {Type: "water", pokemonName: "Blastoise", isSelected: false}


                    ];




// anonymous filter function NOTE: the filter function outputs the data that you want to see from an array
const canDrink = ages.filter(function(bob){

  if(bob == 99){
    return true;
  }
});

console.log(canDrink);
console.log("------------------new line of code(5)-------------------------");

// arrow filter function

const canDrink2 = ages.filter((age)=>(age >=21));

console.log(canDrink2);
console.log("------------------new line of code(6)-------------------------");

console.log(hotChicks[2]);
//document.getElementById("displayText").innerHTML=(JSON.stringify(hotChicks[2])); -->> commented out

console.log("------------------new line of code(7)-------------------------");

  const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail') {
    return true;
    }
 });

 console.log(retailCompanies);

 console.log("------------------new line of code(8)-------------------------");


 const myArray = hotChicks.filter(function(incompatible){

   if(incompatible.Type === "fire"){

     return true;
   }

 });


console.log(myArray);
//document.getElementById("displayText").innerHTML=(JSON.stringify(myArray)); -->> commented out

 console.log("------------------new line of code(8)-------------------------");

 let waterType = pokemonType.filter(function(waterPokemon){
   if(waterPokemon.isSelected === true){

     console.log("execute the needed code here if this condition is true");
     console.log(pokemonType[1].pokemonName);


   }

 });



console.log("------------------new line of code(9)-------------------------");


function random_pokemon(ComputerPokemonChoices)
{

return ComputerPokemonChoices[Math.floor(Math.random()*ComputerPokemonChoices.length)];

}

const ComputerPokemonChoices = ["Charmander", "Squirtle", "Blastoise", "Pikachu"];
console.log(random_pokemon(ComputerPokemonChoices));







// NOTE: you don't have to use a return statement if you don't want to see the array. It will execute code if the condiftion is true without displaying the new array to the user. (see line 8)
