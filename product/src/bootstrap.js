import names from 'vainglory-hero-names';

const mount = (el) => {

    let product = "";
    var rndomNames = names.random(5);

    for(let i = 0; i < 5; i++) {
     product += `<div>${rndomNames[i]}</div>`;
    }

    el.innerHTML=product;

}

// check if in the development mode or production mode
// if in development mode and in the product page, call mount function
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#product-dev');

    if(el) {
        mount(el);
    }
}

export { mount };