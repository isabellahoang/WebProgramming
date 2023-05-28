let products = {
    data: [
        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
        },

        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
            price: "34",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ BLACK",
            price: "22",
            image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
            price: "38",
            image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
        },

        {
            productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: "42",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        },

        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
        },

        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
            price: "34",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ BLACK",
            price: "22",
            image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
            price: "38",
            image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
        },

        {
            productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: "42",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        },

    ]
};


// console.log(products.data);

const productsDiv = document.getElementById("productsDiv");

for (let i = 0; i < products.data.length; i++) {
    // console.log(products.data[i].productName);
    let div_card = document.createElement("div");
    div_card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("image-container");
    img.src = products.data[i].image;
    div_card.appendChild(img);

    let div_container = document.createElement("div");
    div_container.classList.add("container");
    
    let productName = document.createElement("h5");
    productName.innerText = products.data[i].productName;
    div_container.appendChild(productName);

    let price = document.createElement("p");
    price.innerText = products.data[i].price;
    div_container.appendChild(price);

    div_card.appendChild(div_container);
    productsDiv.appendChild(div_card);
}
