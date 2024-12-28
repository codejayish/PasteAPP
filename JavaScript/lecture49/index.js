let src = {
    age:12,
    wt:68,
    ht:180
};
//objects are dynamic in nature since we can add anything inside object at anytime outside the object block too

let dest = {};
//cloning using iteration
for(let key in src) {                                   //one of the Cloning process
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

src.age = 90;

console.log("src: ", src);
console.log("dest: ", dest);

// let src2 = {
//     value:101,
//     name: "Love babbar"
// }

let dest1 = Object.assign({}, src, src2);             //one of the Cloning process   

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest1);


let dest2 = {...src};                                 //one of the Cloning process
// //let dest = src;

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest2);

// console.log(obj)

// obj.color = "White";

// console.log(obj)

