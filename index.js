function receivesAFunction(callback) {
    
    callback();
  }
  
  receivesAFunction(function() {
    console.log("Callback function called.");
  });

  function returnsANamedFunction() {
   
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }
  
  const myFunction = returnsANamedFunction();
  myFunction(); 
  
  function returnsAnAnonymousFunction() {
    
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction(); 
  