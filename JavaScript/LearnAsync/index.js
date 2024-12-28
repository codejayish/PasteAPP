
// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set Timeout block")
//     }, 3000);
// }

// let output  = getData();

// ///await - ?

// //fetch API - it provides interface to fetch resources

// async function getData() {                           //we shd use async before func. declaration if we r using await in code
//     // get request - async                           //we use await in that line so that the code execution waits there until that line of code not fully executed   
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     // parse json - async
//     let data = await response.json();
//     console.log( data );
// }
// getData();
//scenario:
//prepare url / api endpoint -> sync
//await //fetch data - > network call -> async
//process data ->sync                                    //here we r processing data w/o fetching total data from network so, 
                                                         //we use await such that all the data is fetched properly and then we process data
                                                         //hence, with the help of asyn we r changing asyncronous code to syncronous code(sequential code)

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "love babbar" }),
    headers: myHeaders,
  };
//apikey
async function getData() {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}
async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Love babbar -> I am in love with someone.',
          userId: 5,
          /* other post data */
        })
      })
    let data = await response.json();
    console.log("post data response: ", data);
}

async function processData() {
    await postData();
    await getData();
}
processData();
