/*Refactor the following function into a one-liner:*/ 
//one-liner
const printName=name=> "Hi"+name;
console.log(printName(" Sachin"));
//  console.log(c);      
// /*Rewrite the following code using template literals*/
const printBill = (name, bill) => {
                  //use of template literals
                     return `Hi ${name} , please pay: ${bill}`;
           }
let c= printBill("Nova",800);
console.log(c)
// /*Modify the following code such that the object properties are destructured and logged.*/
const person = {
                      name: 'Noam Chomsky',
                      age: 92
            }
           
          //  let name = person.name;
          //  let age = person.age;
          //  console.log(name);
          //  console.log(age);
           const { name, age } = person;
           //object properties are destructured and logged
           console.log( name , age ); // Output,


