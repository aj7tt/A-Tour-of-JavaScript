/*****************************************************************************

@Program :  
Type Conversion and Coercion

@problem_satement : 
 1. Predict the result of these 5 operations without executing them:
    '9' - '5';
    '19' - '13' + '17';
    '19' - '13' + 17;
    '123' < 57;
     5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right

********************************************************************************/


console.log('9' - '5');  
//strings

console.log('19' - '13' + '17');
//left to right ('19'-'13'=6 +'17' === 617)


console.log('19' - '13' + 17); 
// ('19'-'13'=6 +17 === 23)


console.log('123' < 57); 
// false

console.log(5 + 6 + '4' + 9 - 4 - 2); 
//left to right(11+'4'+3) 1143


// contributed by @_aj7t