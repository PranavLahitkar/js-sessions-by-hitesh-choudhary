 console.log(2 > 1);
 console.log(2 >= 1);
 console.log(2 < 1);
 console.log(2 == 1);
 console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0);//flase
console.log(null >= 0);//true  
//he equality check == for undefined and null is defined such that, 
  //without any conversions, they equal each other and don't equal anything else. That's why (2) null == 0 is false.

console.log(undefined == 0); //false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === its like 

console.log("2" === 2); //strict equality op will be false
