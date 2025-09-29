// q1. 
// let date = new Date(0);
// console.log(date);

// q2. 
// let nowDate = new Date("2025-08-23");
// let userDate = new Date("2025-09-28");

// let difference = userDate - nowDate;

// let noOfDays = difference/1000/60/60/24;
// if (noOfDays > 30){
//     console.log("kaha thyy ap date nikal gya he ab ap form submit nhii kar skte");
// }
// else{
//     console.log("Congrats apka form submit ho gya hee..");
// }

// q3. 
// let stratingDate = "2024-04-29T08:02:12Z";
// let endingDate = "2025-09-10T09:34:33Z";

// function takeDifference(start, end){
//     let startDate = new Date(start);
//     let endDate = new Date(end);
//     let diff = (endDate - startDate)/1000;

//     let years = Math.floor(diff/(60*60*24*365));
//     diff = diff % (60*60*24*365);

//     let months = Math.floor(diff / (60 * 60 * 24 * 30));
//     diff = diff % (60*60*24*30);

//     let days = Math.floor(diff / (60 * 60 * 24));
//     diff = diff % (60*60*24);

//     let hours = Math.floor(diff / (60 * 60));
//     diff = diff % (60*60);

//     let minutes = Math.floor(diff / (60));
//     let seconds = diff % (60);
    // console.log(seconds);
    // console.log(minutes);
    // console.log(hours);
    // console.log(days);
    // console.log(months);
    // console.log(years);

//     return `${years} year ${months} Month ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
// }
// let differnce = takeDifference(stratingDate, endingDate);
// console.log(differnce);

// q4. 
// let n = 5;
// let stratingDate = new Date("2025-04-23T08:23:30");
// let newDateTimeStamps = stratingDate.getTime() + 5 * 24 * 60 * 60 * 1000;
// // console.log(newDateTimeStamps);
// let newDate = new Date(newDateTimeStamps);
// console.log(newDate);

// q5. 
// let dob = new Date("2002-11-18");
// let currentDate = new Date();

// let yearDiff = currentDate.getFullYear() - dob.getFullYear();
// let monthDiff = currentDate.getMonth() - dob.getMonth();
// let daysDiff = currentDate.getDate() - dob.getDate();
// // console.log(yearDiff);
// // console.log(monthDiff);
// // console.log(daysDiff);

// if (monthDiff < 0 || (monthDiff === 0 && daysDiff < 0)){
//     yearDiff--;
// }

// console.log(yearDiff);


// q6.***************
