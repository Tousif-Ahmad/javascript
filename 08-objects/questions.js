// q1.
// const person = {
//     name : "sam",
//     age : 22,
//     city : "chitral",
// }

// person.email = "sam@gmail.com";
// delete person.city;
// // console.log(person);

// for(let key in person){
//     console.log(`value of ${key} is ${person[key]}`);
// }

// q2.
// const obj = {
//     firstName : "tousif",
//     middleName : "ahmad",
//     lastName : "khan",
// }
// function getFullName(ob){
//     return `${obj.firstName} ${obj.middleName} ${obj.lastName}`
// }
// let fullName = getFullName(obj);
// console.log(fullName);

// q3.
// let user = {
//     name : "ali",
//     age : 23,
//     city : "peshawar",
// }

// function noOfKeys(obj){
//     let keys = Object.keys(obj);
//     return keys.length;
// }
// let getKeys = noOfKeys(user);
// console.log(getKeys);

// q4.
// const users = [
//   { name: "alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
// ];

// function result(arr, role) {
//   let fileterdArray = users.filter((user) => {
//     return user.role === role;
//   });
//   let mapArray = fileterdArray.map((item) => {
//     return item.name;
//   });

//   return mapArray;

// }
// const ans = result(users, "admin");
// console.log(ans);

// q5. 
// let products = [
//     {id : 1, name : "tecno spark"},
//     {id : 2, name : "samsung galaxy"},
//     {id : 3, name : "oppo q12"},
//     {id : 3, name : "oppo a2"},

// ]
// function search(product, searchKeywords){
//     let filteredArray = product.filter((obj)=>{
//         return obj.name.toLowerCase().includes(searchKeywords.toLowerCase());
//     })
//     console.log(filteredArray);
// }
// // let result = search(products, "tecno spark");
// // console.log(result);
// search(products, "opp");


// q6. 
const comments = [
    {postId : 1, comment : "awesome"},
    {postId : 2, comment : "Amazing"},
    {postId : 1, comment : "helpful video"},
]

function groupByPost(a){
    // console.log(a);
    let groupedComments = {};
    a.forEach((elem)=>{
        let {postId, comment} = elem
        if (groupedComments.hasOwnProperty(postId)){
            groupedComments[postId].push(comment)
        }
        else{
            groupedComments[postId] = [comment]
        }
    })
    console.log(groupedComments);
}
groupByPost(comments)


// q7. 
// const params = {
//     search : "alpha",
//     page : 2,
//     sort : "asc",
// }

// function createUrl(inp){
//     let url = "";
//     for (key in inp){
//         url = url + `${key}=${inp[key]}&`
        
//     }
//     let finalUrl = url.slice(0, url.length-1);
//     console.log(finalUrl);
// }
// createUrl(params)