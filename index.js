//1
function fizzBuzzz(){
  for (let i = 1; i<= 100 ; i++){
      if (i % 3 === 0 && i % 5 === 0){
          console.log("FizzBuzz");
      }else if (i % 5 === 0){
          console.log("Buzz");
      }else if (i % 3 === 0){
          console.log("Fizz");
      }else{
          console.log(i);
      }
    }
}

//2
function fizzBuzz(number){
  let array = [];
  for(let i =1; i<=number; i++){
      if (i % 3 === 0 && i % 5 === 0){
          array.push("FizzBuzz")
      }else if(i % 3 === 0){
          array.push("Fizz")
      }else if(i % 5 === 0){
          array.push("Buzz")
      }else{
          array.push(i)
      }
  }
  return array
}


//fizzBuzzz();
console.log(fizzBuzz(15));