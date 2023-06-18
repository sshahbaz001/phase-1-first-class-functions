// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function//

/*Here we want to create 2 functions. 
one function will ne names receivesAFunction. this function calls a callback function
there is another function, that perfoms an event. this is the function that is being called. */


function receivesAFunction(eat) {
       eat();
}

// receivesAFunction();

// function returnsANamedFunction () {
//      name (); 
// }

function returnsANamedFunction() {      //function named returnsANamedFunction
       return function named(){}    //here the function is returning a another funtion called namedFunction
                                   // i am writing this here as a body for the function 
       };

function returnsAnAnonymousFunction () {
       return function(){}
};