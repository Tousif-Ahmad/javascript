// FALSY => false, null, undefined, 0, -0, 0n, "", NAN.
// TRUTHY => anything which is not falsy.

// let res = (true && true) ? "statement 1" : "statement 2";
// console.log(res);

// let res = ("" && true) ? "statement 1" : "statement 2";
// console.log(res);

// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(" "));
// console.log(Boolean(NaN));


// SHORT CIRCUITING 
// console.log("" || undefined || null || "ali" || false);
// console.log("" && "ali" && "" && "khan");


// NULLISH COALESCING => returns the right hand value only if the left value is 
// null or undefined.
// console.log(12 ?? "");
// console.log("" ?? undefined);
// console.log(undefined ?? "sam");