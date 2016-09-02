/*
Closure 1.1
Inside the message function return the welcome text plus the firstname and the last. For example: 'Your doing awesome keep it up sally smith'
*/

function motivation(firstname, lastname){
    var welcomeText = 'You are doing awesome keep it up ';

     function message() {
        return welcomeText + firstname + " " + lastname;
    }


    return message()

}

motivation("sally", "smith")

/*
Closure 1.2
The value of name should return personObj.name
*/

var outerFunction = (function() {
    var personObj = {
        name: "Bob",
        age: 28,
        gender: "male"
    };

    return {
        name: function () {
          return personObj.name;
        }
    }
})();

outerFunction.name();



/*
Closure 1.3
Inside the return create a name property with the value being a function that returns personObj.name
*/
var outerFunction = (function() {
    var personObj = {
        name: "Bob",
        age: 28,
        gender: "male"
    };

    return {
      name: function () {
        return personObj.name;

      }
    }

})();

/*
Inside the publicMethod function return privateMethod invoked
*/

var module = (function() {
    var person = {
        name: "phillip",
        age: 29,
        location: 'Utah'
    };

    var privateMethod = function(){
        return person.name + ' ' + person.age + ' ' + person.location
    };


    return {
          publicMethod: function () {
           return privateMethod();
        }
    };

})();


/*
Closure 1.5
inside the return create a publicMethod property with the value being a function that returns privateMethod
*/

var module = (function() {
    var person = {
        name: "phillip",
        age: 29,
        location: 'Utah'
    };

    var privateMethod = function(){
        return person.name + ' ' + person.age + ' ' + person.location
    };

    return {
       publicMethod: function() {
         return privateMethod();
       }
    };

})();

 module.publicMethod();


/*
 Closure 2.1

 The publicMethod should invoke the privateMethod and return the result. The privateMethod has 3 parameters name,age and location
 */

 var module = (function() {

     var privateMethod = function(name, age, location){
         return name + ' ' + age + ' ' + location
     };


     return {
         publicMethod: function (name,age,location) {
             return privateMethod(name,age,location);
         }
     };

 })();

 module.publicMethod('Sally', 29, 'UTAH');


 /*
 Closure 2.2

 Inside the return create a property called publicMethod with a value that is a function that has 3 parameters a name, age and location, this function invokes privateMethod, which also has 3 parameters, and returns the result.
 */

 var module = (function() {

     var privateMethod = function(name, age, location){
         return name + ' ' + age + ' ' + location
     };



     return {
       publicMethod: function(name, age, location){
        return privateMethod(name, age, location);
      }
     };

 })();

 module.publicMethod('Sally', 29, 'UTAH');


 /*
 Closure 2.3

 Create a anonymous function that takes num2 parameter and then returns num1 * num2
*/

var numberFactory = function(num1) {
    return function(num2) {
      return num1 * num2;
    }

}


// Here we set the num1 value to 5
var times5 = numberFactory(5);


// Because of closure the numberFactory remembers the value of of num 1 which is being set on the variable times5 when we call numberFactory(5);

times5(3) // This would return 15
times5(4) // This would return 20


 /*
 Closure 2.4

 Create a innerFunction that takes a name2 as a parameter and returns name1 + name2;
*/

var nameTester = function(name1) {
  var innerFunction = function(name2) {
    return name1 + name2;
  }

    return innerFunction
};

 // Create a variable called newName that is equal to nameTester with an argument of 'sally'
var newName = nameTester('sally');
newName('smith') // should return sallysmith

 /*
 Closure 2.5

 Inside the smoothy function create a blend function that takes fruit and yogurt as parameters and returns fruit + yogurt
 */


 var smoothy = (function() {


  // Create a blend function that returns fruit + yogurt
  var blend = function(fruit, yogurt) {
    return fruit + yogurt;
  }



     return {
         makeSmoothy: function (fruit,yogurt) {
             return blend(fruit,yogurt);
         }
     };

 })();

  smoothy.makeSmoothy('apple', 'strawberry');
