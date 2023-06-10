import {mount as productMount} from "product/ProductIndex";
import {mount as cartMount} from "cart/CartIndex";

console.log("container");
productMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));