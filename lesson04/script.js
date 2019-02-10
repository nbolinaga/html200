console.log('testing');
// set number as variable (not sure if needed, seems to work without it)
let number;
// runs function when button is clicked
function square(){
// prompts message asking for the numbers
 number = prompt('Enter numbers separated by a comma');
// divides numbers by the comma and forms an array
 numberArray = number.split(',');
// alerts number plus number squared
 numberArray.forEach(function(item,index){
  alert(`${item} squared is = ${item * item}`);
  });
}
