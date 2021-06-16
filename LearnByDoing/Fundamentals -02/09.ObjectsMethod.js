/*

 @Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property

*/


// object myCountry
const myCountry= 
{
    country : 'India',      //string
    population : 120,       //number
    language : 'Hindi',
    neighbours: ['Bd', 'Nepal', 'Korea'],       //arrays
    capital : 'Delhi',

    describe : function()       //function
    {
        console.log(
        `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital of ${this.capital}.`
        );
    },

    isIsland : function(){
         this.isIsland=!Boolean(this.neighbours.length);
        //this.isIsland= this.neighbours.length===0 ? true: false;
    }
};

console.log(myCountry.isIsland());

console.log(myCountry.describe());
console.log(myCountry);