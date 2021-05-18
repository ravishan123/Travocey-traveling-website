
    var removeItems = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeItems.length; i++) {
        var button1 = removeItems[i]
        button1.addEventListener('click', removeItem)
    }

    var inputQunt = document.getElementsByClassName('cartInput')
    for (var i = 0; i < inputQunt .length; i++) {
        var input = inputQunt [i]
        input.addEventListener('change',changeQunti)
    }

    var addToCart = document.getElementsByClassName('button1')
    for (var i = 0; i < addToCart.length; i++) {
        var button = addToCart[i]
        button.addEventListener('click', addToCartBt)
    }

    document.getElementsByClassName('purchaseBtn')[0].addEventListener('click', purchaseClicked)

// after purchase click alart box will appear
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cartItems')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal()
} 

//  funtion for removing items from cart
function removeItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotal()
}


function changeQunti(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}

// adding items to cart
function addToCartBt(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title1 = shopItem.getElementsByClassName('itemTitle')[0].innerText
    var price1 = shopItem.getElementsByClassName('itemPrice')[0].innerText
    var image = shopItem.getElementsByClassName('itemImage')[0].src
    addItemToCart(title1, price1, image)
    updateTotal()
}

function addItemToCart(title, price, imageSrc) {
    
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cartItems')[0]
    var cartItemNames = cartItems.getElementsByClassName('cartTitle')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Item has already added to the cart')
            return
        }
    }
    
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cartImg" src="${imageSrc}" width="100" height="100">
            <span class="cartTitle">${title}</span>
        </div>
        <span class="cartPrice cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cartInput" type="number" value="1">
            <button class="btn btn-remove" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click',removeItem)
    cartRow.getElementsByClassName('cartInput')[0].addEventListener('change',changeQunti)
}




// updating cart total
function updateTotal() {
    var cartContainer = document.getElementsByClassName('cartItems')[0]
    var cartRow2 = cartContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRow2.length; i++) {
        var cartRow1 = cartRow2[i]
        var price= cartRow1.getElementsByClassName('cartPrice')[0]
        var quantity = cartRow1.getElementsByClassName('cartInput')[0]
        var price2 = parseFloat(price.innerText.replace('$', ''))
        var quantity2 = quantity.value
        total = total + (price2*  quantity2)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}



