// NUMBERS 
// let num = 12345;
// let num1 = 123.4;
// console.log(typeof num);
// console.log(typeof num1);

// USING CONSTRUCTOR METHOD 
// let num = new Number(1234);
// console.log(num);

// NUMBER PROPERTIES 
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NaN);
// console.log(Number.EPSILON);
// console.log(Number.isNaN(0/0));

// NUMBER METHODS 
// let num = 123;
// console.log(Number.parseInt(num));
// console.log(Number.parseFloat(num));

// let num = 1/0;
// console.log(Number.isFinite(num));

// NUMBER INSTANCE METHODS 
// let num = 234.2345678;
// console.log(num.toFixed(3));
// console.log(num.toExponential(3));
// console.log(num.toPrecision(5));
// console.log(typeof num.toString());


//  MATH OBJECT 
// let num = 123.52;
// console.log(Math.round(num));

// console.log(Math.floor(1.5));
// console.log(Math.floor(1.9));
// console.log(Math.floor(1.0));
// console.log(Math.floor(-2.6));

// console.log(Math.ceil(1.5));
// console.log(Math.ceil(1.9));
// console.log(Math.ceil(1.0));
// console.log(Math.ceil(-2.6));

// console.log(Math.abs(-3));
// console.log(Math.abs(2));
// console.log(Math.abs(0));
// console.log(Math.abs(-0));

// console.log(Math.sqrt(2));
// console.log(Math.sqrt(16));

// console.log(Math.pow(2,3));

// console.log(Math.min(2,3,4,5));
// console.log(Math.max(10,20,30));

function generateRandomNum(minVal, maxVal){
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
}
console.log(generateRandomNum(5,10));