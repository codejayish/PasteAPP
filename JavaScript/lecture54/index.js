

// //Code  1
// const t1 = performance.now()

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Para " + i;                     //this creates 100 paras in html
//     document.body.appendChild(para);       //100times reflow, 100times repaint
// }

// const t2 = performance.now();                                   //this calculates the time taken by code to run

// console.log("total time by code 1: " + (t2-t1));

// //Code 2

// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Para " + i;
//     mydiv.appendChild(para);
// } 
// document.body.appendChild(mydiv);       //only 1reflow, 1repaint

// const t4 = performance.now();

// console.log("total time by code 2: " + (t4-t3));


// Reflow=process of calculating posistion/dimension of element && Repaint=process of displaying content/element pixel by pixel 
//best code = lesser Reflow and lesser Repaint


//Best Code is:-
let fragment = document.createDocumentFragment();


for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i + "abc";
    ///NO reflow ande No repaint for the below line
    fragment.appendChild(para);
}
///the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);
