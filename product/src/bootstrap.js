import names from 'vainglory-hero-names';
let product = "";
var rndomNames = names.random(5);

for(let i = 0; i < 5; i++) {
    product += `<div>${rndomNames[i]}</div>`;
}

document.querySelector("#product-dev").innerHTML=product;