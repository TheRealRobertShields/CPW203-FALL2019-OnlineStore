window.onload = function () {
    initBuyButtons();
};
/**
 * Wire up all the "Buy" buttons
 */
function initBuyButtons() {
    var buyBtns = document.querySelectorAll("div.buy");
    for (var i = 0; i < buyBtns.length; i++) {
        var currBtn = buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}
function buyProduct() {
    alert("you clicked buy");
}
/**
 * Represents a single shopping cart item.
 */
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
// Test Code //
/*
let prod = new Product();
prod.name = "blue thing";
prod.description = "a blue thing";
prod.price = 4.99;
*/ 
