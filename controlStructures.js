///////////////////////////////////// point 1


let num1 = 9;
let num2 = 6;
let num3 = 7;
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

///////////////////////////////////// point 2

if (num1 % 2 != 0) {
  console.log("odd");
} else {
  console.log("even");
}


///////////////////////////////////// point 3


if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
}

if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      console.log(num2, num1, num3);
    } else {
      console.log(num2, num3, num1);
    }
  }
  if (num3 > num1 && num3 > num2) {
    if (num2 > num1) {
      console.log(num3, num2, num1);
    } else {
      console.log(num3, num2, num1);
    }
  }



///////////////////////////////////// point 4


let amount = prompt();
if(amount < 0){
  console.log("Please enter a positive number") ;
  amount = prompt();
  if (typeof amount != isNaN(amount)){
    console.log("Please enter a number") ;
  }
}else {
  console.log(amount);
}


///////////////////////////////////// point 5


let username = prompt();
let password = prompt();
if ( username.length > 6 &&  password.length > 8 ){
  console.log ("login successful") ;
} else {
  console.log ("login failed.") ;

}



///////////////////////////////////// point 5


let x = 0 ;
while( x <= 20){
  console.log (x) ;
  x++ ;
}


///////////////////////////////////// point 5


for (let i = 20 ; i >= 0 ; i--){
  console.log (i) ;
}

///////////////////////////////////// point 5


for ( let i = 1 ; i <= 20 ; i++){
  if ( i % 2 == 0 ){
    console.log(i);
  }
}

///////////////////////////////////// point 5
 
let startRange = 5 ; // 5 , 6 , 7 , 
let endRange = 8 ;
let arr = [] ;
for ( let i = 0 ; i <= 3; i++){
    if ( startRange <= endRange ){
       arr.push(startRange);
      startRange++ ;
    }
  }
  
console.log(arr);


///////////////////////////////////// point 6


let stars = ""
for (let i = 1 ; i <= 5 ; i++){
  for(let j = 1 ; j <= i ; j++){
    stars += "*" ; 
  }
  stars += "\n" ; 
}
console.log(stars);