

function getAge() {
    return 190;
}


function utility(name = "Love", age = getAge()) {
   console.log(name, " ", age); 
}

utility();





// function solve(value = "Rahul") {
//     console.log("HELLO JII -> ", value);
// }
// solve(undefined);
// function sayName(fName = "Uday", lName = fName.toUpperCase()) {            //here we have set default parameters inside function
//     console.log("My Name is: ", fName," ", lName);
// }

// sayName("Love");





// class Human {
//     //properties
//     age = 13;                                 // public - this age is not only used inside class but also outside too
//     #wt = 80;                            //private - this wt is used only inside class
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;                  //we can use this constructor to change the variables declared inside the class
//         this.#wt = newWeight;
//     }


//     //behaviour

//     #walking(){
//         console.log("I am Walking ", this.#wt);
//     }

//     running() {
//         console.log("I am running")
//     }

/*    get fetchWeight() {
        return this.#wt;
        }
                                          we can use this get,set func. to get the private variable declared inside class                
      set modifyWeight(val) {
        this.#wt = val;
        }                    */
// }

// let obj = new Human(50, 190,101);
// console.log(obj.fetchWeight);

// obj.walking();