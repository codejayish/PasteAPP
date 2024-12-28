

// function changeText(event) {
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = " Babbar"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);                        //when we click on fpara then changeText function is being called there and these func. changes the text

//fpara.removeEventListener('click', changeText);

// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai"
// });
// console.log("Hi");
// let paras = document.querySelectorAll('p');                          //we r selecting all the paras inisde 'p'

function alertPara(event) {
    if(event.target.nodeName === 'SPAN') {                              //if we click on span content para then only we will get an alert
        alert("You have Clicked on para: " + event.target.textContent ); //target is the element upon which we r clicking                                                                                              
    }
    
}

// for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     console.log("eventListener added");
//     para.addEventListener('click', alertPara);                     //when we click on anyone of the para, then alertpara function is being called
// }

let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertPara);