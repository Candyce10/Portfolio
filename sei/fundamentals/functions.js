function addingStuff(a,b) {
    console.log(a);
    console.log(b)
    return a + b;
  }
  console.log(addingStuff(25,100))
  
  function ourFunctionWithArgs(a,b) {
    console.log(a-b);
  }
  ourFunctionWithArgs(10,5); // this will return the value 5
  
  
  
  
  // Write a function named `computeArea` as a **function declaration**.
  // It will have two parameters: `width` & `height`.
  // It will compute the area of a rectangle (*width* X *height*) and return a string in the following form:
  // > The area of a rectangle with a width of ___ and a height of ___ is ___ square units
  // > 
  function computeArea (width,height){
    return (width*height)
  }
  console.log( computeArea(5, 25))
  
  
  // Write a function named `planetHasWater` as a **function expression**.
  // It will have one parameter: `planet`.
  // Return `true` if the `planet` argument is either “Earth” or “Mars”; otherwise, return `false`.
  // Bonus points if you ensure the function will work regardless of the casing of the `planet` being passed in (‘earth’, ‘MARS’, etc.).
  // Invoke the function a few times to test it:
  // ```jsx
  function planetHasWater (planet){
   if (planet.toLowerCase() === "earth" || planet.toLowerCase() == "mars"){// .toLowerCase makes the function case insensitive
     return true;
   } else {
     return false;
   }
  }
  console.log(planetHasWater("mArS")); // returns true
  
  