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
var LargeQtyCounter = document.querySelector(".largeQty")

var checkoutBtn = document.querySelector(".checkout")
var paymentAmount = document.querySelector(".paymentAmount")
var payBtnElement = document.querySelector(".payBtn")
var messageElement = document.querySelector(".message")


var smallPizzaQty = 0
var mediumPizzaQty = 0
var LargePizzaQty = 0
var totalCart = 0

function clickBtn(event) {
    if (event.target.className === addBtnSmall) {
        alert("Tada!!")
        // smallPizzaQty++;
        // smallQtyCounter.innerHTML = smallPizzaQty
    }

    console.log()
}

addBtnSmall.addEventListener('click', clickBtn)
buyBtnSmall.addEventListener('click', clickBtn)


// payBtnElement.addEventListener('click', function(){
//     alert("Hello!")
// })

// checkoutBtn.addEventListener('click', function(){
//     alert("Hello!")
// })

// buyBtnLarge.addEventListener('click', function(){
//     alert("Hello!")
// })

