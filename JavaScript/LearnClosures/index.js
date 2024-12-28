// Closure = is a combination of function. and required data/lexical scope/surrounding state

function outerFunction() {
  let name = "Babbar";

  function innerFunction() {
    console.log(name);                  //here the inner func. is binded with name becoz of closure property
  }

  return innerFunction;
}
let inner = outerFunction();

inner();
