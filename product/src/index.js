let product = "";

for(let i = 0; i < 5; i++) {
    product += `<div>${i}</div>`;
}

document.querySelector("#product-dev").innerHTML=product;