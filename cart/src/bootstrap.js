import names from 'vainglory-hero-names';

const mount = (el) => {
    var rndomNames = names.random(5);

    console.log("cart");
    el.innerHTML = `<div>You have ${rndomNames.length} items in your cart</div>`;

}

if(process.env.NODE_ENV === 'development') {

    const el = document.querySelector('#cart-dev');

    if(el) {
        mount(el);
    }
}

export { mount };