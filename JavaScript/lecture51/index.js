// let mydiv = document.querySelector('#mydiv');                     //the paragraph with id="mydiv" is returned
//we can update the existing element using:- innerHTML, outerHTML, text-content, innerText

// let newElement = document.createElement('span');
// newElement.textContent = "Love babbar"                            //we can add new text like this

// mydiv.insertAdjacentElement('afterend', newElement);

let parent = child.parentElement;
let child = document.querySelector('#fpara');
parent.removeChild(child);                                           //we can remove text this