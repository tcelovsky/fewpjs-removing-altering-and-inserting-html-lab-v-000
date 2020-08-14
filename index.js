// Write your code here!
// document.body.appendChild(element)
// let ul = document.createElement('ul')
 
// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }
 
// element.appendChild(ul)

// let element = document.querySelector("p#greeting");
// element.innerHTML = 'Hello, DOM!'

// let header = document.getElementById("div#header");
// header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// main.remove();
let el = document.getElementById("main");
el.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);
// let newId = document.createElement('victory');
// newHeader.appendChild(newId);

let newContent = document.createTextNode("Tatyana is the champion");
newHeader.appendChild(newContent);


  // add the newly created element and its content into the DOM 
  // var currentDiv = document.getElementById("div1"); 
  // document.body.insertBefore(newDiv, currentDiv); 