const carts = JSON.parse(localStorage.getItem("carts")) || [];

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
                name: "Ralph Lauren Cableknit V-Neck Sweater",
                price: 79.99,
                image: "https://i.pinimg.com/474x/62/ef/0b/62ef0bffdf9530f43b5691f76b2569c4.jpg"
            },
    
            {
                name: "Wide Leg Denim",
                price: 39.99,
                image: "https://i.pinimg.com/474x/30/a1/d7/30a1d7bc39c3916623a80d0d01b86acd.jpg"
            },
    
            {
                name: "Raf Simons 'I Love You' Raglan Sleeves Sweater In Beige",
                price: 59.99,
                image: "https://i.pinimg.com/564x/89/44/7a/89447ad5f76f505f1f2e2d034458b887.jpg"
            },
    
            {
                name: "Vintage Converse Cropped Tee",
                price: 20.99,
                image: "https://i.pinimg.com/474x/bf/b1/ab/bfb1ab43bbcd015096654f4f6e66ded3.jpg"
            },
    
            {
                name: "Diesel Zip Up Sweater Gray",
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
 