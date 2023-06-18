let carts = JSON.parse(localStorage.getItem("carts")) || [];

console.log(carts);

for (let i = 0; i < carts.length; i++) {

    if (carts[i].quantity > 0) {

            let card = document.createElement("div");
            card.classList.add("card");
        
            let img = document.createElement("img");
            img.classList.add("img-container");
            img.setAttribute("src", carts[i].image);
            card.appendChild(img);
        
            let container = document.createElement("container");
            container.classList.add("container");
        
            let name = document.createElement("h5");
            name.innerText = carts[i].name;
            container.appendChild(name);
        
            let price = document.createElement("h6");
            price.innerHTML = "<b>Price: </b>" + carts[i].price;
            container.appendChild(price);

            let quantity = document.createElement("h6");
            quantity.innerHTML = "<b>Quantity: </b>" + carts[i].quantity;
            container.appendChild(quantity);
        
            card.appendChild(container);
            document.getElementById("products").appendChild(card);
        } 
        
    }

    let cartss = {
        data: [
            {
                name: "MATRIX 1999 DECK",
                price: "780.000đ",
                image: "images/matrix-1999-1.jpg"
            },
    
            {
                name: "RAEDA DECK",
                price: "780.000đ - 1.470.000đ",
                image: "images/Raeda-Deck.jpg"
            },
    
            {
                name: "MUSTY DECK",
                price: "780.000đ - 1.470.000đ",
                image: "images/Musty-Deck.jpg"
            },
    
            {
                name: "TRISTIQUE DECK",
                price: "780.000đ - 1.470.000đ",
                image: "images/Tristique-deck.jpg"
            },
    
            {
                name: "FIELD TRIP DECK",
                price: "780.000đ - 1.470.000đ",
                image: "images/Fied-Trip-deck.jpg"
            },
    
            {
                name: "TARO RAINBOW LOGO DECK",
                price: "780.000đ - 1.670.000đ",
                image: "images/web-5.jpg"
            },
    
            {
                name: "NEON RAINBOW LOGO DECK",
                price: "780.000đ - 1.670.000đ",
                image: "images/web-1.jpg"
            },
    
            {
                name: "ORANAGE RAINBOW LOGO DECK",
                price: "780.000đ - 1.670.000đ",
                image: "images/web-2.jpg"
            },
    
            {
                name: "BLUE RAINBOW LOGO DECK",
                price: "780.000đ - 1.670.000đ",
                image: "images/web-3.jpg"
            },
    
            {
                name: "WHITE RAINBOW LOGO DECK",
                price: "780.000đ - 1.670.000đ",
                image: "images/web-4.jpg"
            },
    
            {
                name: "CUTIS MODEL DECK",
                price: "780.000đ - 1.670.000đ",
                image: "images/cutis.jpg"
            },
    
            {
                name: "CAM VU MODEL DECK",
                price: "780.000đ - 1.670.000đ",
                image: "images/cam-vu.jpg"
            },
    
            {
                name: "SON NGUYEN MODEL DECK",
                price: "780.000đ - 1.670.000đ",
                image: "images/son-nguyen.jpg"
            },
        ]
    };



    function displayCart() {
        let j=0, total=0;
        document.getElementById("count").innerHTML = carts.length;
    if(products.length == 0){
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = 0+".00"+"đ";
    }
    else {
        document.getElementById("cartItem").innerHTML = carts.map((items)=>
        {
            let {name, price, image} = items;
            total = total + price;
            document.getElementById("total").innerHTML = total + "đ"
        })
    }
}
 