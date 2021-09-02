var addBtnSmall = document.querySelector(".addBtn1")
var subBtnSmall = document.querySelector(".subBtn1")
var buyBtnSmall = document.querySelector(".orderBtnSmall")

var addBtnMedium = document.querySelector(".addBtn2")
var subBtnMedium = document.querySelector(".subBtn2")
var buyBtnMedium = document.querySelector(".orderBtnMedium")

var addBtnLarge = document.querySelector(".addBtn3")
var subBtnLarge = document.querySelector(".subBtn3")
var buyBtnLarge = document.querySelector(".orderBtnLarge")

var smallQtyCounter = document.querySelector(".smallQty")
var mediumQtyCounter = document.querySelector(".mediumQty")
var largeQtyCounter = document.querySelector(".largeQty")

var checkoutBtn = document.querySelector(".checkout")
var paymentAmount = document.querySelector(".paymentAmount")
var payBtnElement = document.querySelector(".payBtn")
var messageElement = document.querySelector(".message")
var payAmount = document.querySelector('.payAmount')

var totalSmallPizza = document.querySelector(".totalSmallPizza")
var totalMediumPizza = document.querySelector(".totalMediumPizza")
var totalLargePizza = document.querySelector(".totalLargePizza")
var cartTotal = document.querySelector(".cartTotal")

var smallPizzaQty = 0;
var mediumPizzaQty = 0;
var largePizzaQty = 0;
var totalCart = 0;

function addButtonSmall() {
    smallPizzaQty++;
    smallQtyCounter.innerHTML = smallPizzaQty;
    totalSmallPizza.innerHTML = (smallPizzaQty * 49).toFixed(2);
    totalCart = smallPizzaQty * 49 + mediumPizzaQty * 89 + largePizzaQty * 129
    cartTotal.innerHTML = totalCart.toFixed(2);
    if (totalCart > 0) {
        checkoutBtn.classList.remove('hidden');
    }
    // else if (totalCart=0){
    //     checkoutBtn.classList.add('hidden');
    //     payAmount.classList.add('hidden');
    // }
}

function subtractButtonS() {
    smallPizzaQty--;
    if (smallPizzaQty < 0) {
        smallPizzaQty = 0;
    }
    smallQtyCounter.innerHTML = smallPizzaQty;
    totalSmallPizza.innerHTML = (smallPizzaQty * 49).toFixed(2);
    totalCart = smallPizzaQty * 49 + mediumPizzaQty * 89 + largePizzaQty * 129
    cartTotal.innerHTML = totalCart.toFixed(2);
}
addBtnSmall.addEventListener('click', addButtonSmall)
buyBtnSmall.addEventListener('click', addButtonSmall)
subBtnSmall.addEventListener('click', subtractButtonS)


function addButtonMedium() {
    mediumPizzaQty++;
    mediumQtyCounter.innerHTML = mediumPizzaQty;
    totalMediumPizza.innerHTML = (mediumPizzaQty * 89).toFixed(2);
    totalCart = smallPizzaQty * 49 + mediumPizzaQty * 89 + largePizzaQty * 129
    cartTotal.innerHTML = totalCart.toFixed(2);
    if (totalCart > 0) {
        checkoutBtn.classList.remove('hidden');
    }
}
function subtractButtonM() {
    mediumPizzaQty--;
    if (mediumPizzaQty < 0) {
        mediumPizzaQty = 0;  
    }
    mediumQtyCounter.innerHTML = mediumPizzaQty;totalMediumPizza.innerHTML = (mediumPizzaQty * 89).toFixed(2)
    
    totalCart = smallPizzaQty * 49 + mediumPizzaQty * 89 + largePizzaQty * 129
    cartTotal.innerHTML = totalCart.toFixed(2);
}
addBtnMedium.addEventListener('click', addButtonMedium)
buyBtnMedium.addEventListener('click', addButtonMedium)
subBtnMedium.addEventListener('click', subtractButtonM)

function addButtonLarge() {
    largePizzaQty++;
    largeQtyCounter.innerHTML = largePizzaQty;
    totalLargePizza.innerHTML = (largePizzaQty * 129).toFixed(2);
    totalCart = smallPizzaQty * 49 + mediumPizzaQty * 89 + largePizzaQty * 129
    cartTotal.innerHTML = totalCart.toFixed(2);
    if (totalCart > 0) {
        checkoutBtn.classList.remove('hidden');
    }
}
function subtractButtonL() {
    largePizzaQty--;
    if (largePizzaQty < 0) {
        largePizzaQty = 0;
    }
    largeQtyCounter.innerHTML = largePizzaQty;
    totalLargePizza.innerHTML = (largePizzaQty * 129).toFixed(2)
    totalCart = smallPizzaQty * 49 + mediumPizzaQty * 89 + largePizzaQty * 129
    cartTotal.innerHTML = totalCart.toFixed(2);
}
addBtnLarge.addEventListener('click', addButtonLarge)
buyBtnLarge.addEventListener('click', addButtonLarge)
subBtnLarge.addEventListener('click', subtractButtonL)

function checkoutButton(){
    checkoutBtn.classList.add('hidden')
    payAmount.classList.remove('hidden')
}
checkoutBtn.addEventListener('click', checkoutButton)

function payment() {
    messageElement.classList.toggle('hidden')
    var paymentAmount = Number(payAmount.value)
    if(paymentAmount == cartTotal) {
        messageElement.innerHTML = "Enjoy your Pizza!"
        
        smallPizzaQty = 0;
        medPizzaQty = 0;
        largePizzaQty = 0;
        totalCart = 0;

        smallQtyCounter.innerHTML = smallPizzaQty;
        mediumQtyCounter.innerHTML = mediumPizzaQty;
        largeQtyCounter.innerHTML = largePizzaQty;
        
        totalSmallPizza.innerHTML = (smallPizzaQty * 49).toFixed(2);
        totalMediumPizza.innerHTML = (mediumPizzaQty * 89).toFixed(2);
        totalLargePizza.innerHTML = (largePizzaQty * 129).toFixed(2);
        totalCart = smallPizzaQty * 49 + mediumPizzaQty * 89 + largePizzaQty * 129
        cartTotal.innerHTML = totalCart.toFixed(2);

        setTimeout(function(){
            messageElement.classList.add('hidden')
            checkoutBtn.classList.add('hidden')
            payAmount.classList.add('hidden')
            payAmount.value = '';
        }, 4000)
        // var cartItem = document.getElementsByClassName("payAmount hidden")[0]
        // while (cartItem.hasChildNodes()) {
        // cartItem.removeChild(cartItem.firstChild)   
    }
    else if (paymentAmount>totalCart){
        var change = paymentAmount - totalCart
        messageElement.innerHTML = "Enjoy your Pizza, here is your change R" + change.toFixed(2)
    }
    else {
        messageElement.innerHTML = "Sorry, that is not enough money!"
    }
}
payBtnElement.addEventListener('click', payment)