let addBtn = document.querySelector(".button");
let kundvagn = document.querySelector(".kundvagn_produkter");

//Ändrar bilderna
let p1Img = document.querySelector("#p1 .image_div img");
p1Img.src = "./Img/ProteinImage1.webp";
let p2Img = document.querySelector("#p2 .image_div img");
p2Img.src = "./Img/ProteinImage2.webp";
let p3Img = document.querySelector("#p3 .image_div img");
p3Img.src = "./Img/ProteinImage3.webp";
let p4Img = document.querySelector("#p4 .image_div img");
p4Img.src = "./Img/Protein4.webp";
let p5Img = document.querySelector("#p5 .image_div img");
p5Img.src = "./Img/Protein5.webp";
let p6Img = document.querySelector("#p6 .image_div img");
p6Img.src = "./Img/Protein6.webp";

//Produkter
let p1 = document.querySelector("#p1 .namn_pris").querySelectorAll("p");
let p2 = document.querySelector("#p2 .namn_pris").querySelectorAll("p");
let p3 = document.querySelector("#p3 .namn_pris").querySelectorAll("p");
let p4 = document.querySelector("#p4 .namn_pris").querySelectorAll("p");
let p5 = document.querySelector("#p5 .namn_pris").querySelectorAll("p");
let p6 = document.querySelector("#p6 .namn_pris").querySelectorAll("p");

//Objekt för varje produkt som håller namn och pris

let lista = [
    {
        name: "Bulk Protein",
        price: 199
    },
    {
        name: "Beast Whey Protein",
        price: 899
    },
    {
        name: "Gold Whey Protein",
        price: 1999
    },
    {
        name: "Pure Whey Protein",
        price: 699
    },
    {
        name: "Isopure Protein",
        price: 9
    },
    {
        name: "Egg White Protein",
        price: 8999
    },
];

let amountProductsInCart = 0;
let maxProductsInCart = 5;

ImplementObjectInformation();

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".produkt button").forEach((button, i) => {
        button.addEventListener("click", function () {

            if (amountProductsInCart < maxProductsInCart) {

                let productDiv = document.createElement("div");
                let cartItemName = document.createElement("p");
                let cartItemPrice = document.createElement("p");
                let totalPrice = document.querySelector("p");

                productDiv.classList.add("produkt_inuti_kundvagn");

                cartItemName.textContent = lista[i].name;
                cartItemPrice.textContent = lista[i].price + " kr";

                kundvagn.appendChild(productDiv);
                productDiv.appendChild(cartItemName);
                productDiv.appendChild(cartItemPrice);

                amountProductsInCart++;

            }
            else
            {
                alert("Din kundvagn är full, du kan inte lägga till mer än 5 saker");
            }
        });
    });
});



function AddItem() {
    let cartItem = document.createElement("p");
    cartItem.textContent = p1Object.name;
    kundvagn.appendChild(cartItem);
    console.log("Hello World");
}

//En metod för dålig kvalite produkt 
function AddLowQualityItem() {
    alert("Var försiktig, den varan är så dålig att din chans att överleva efter " +
        "att ha ätit den, ungefär vid 60%, 90% njurproblem och andra infektioner"
    )
}

//Lägger till informationen
function ImplementObjectInformation() {
    p1[0].textContent = lista[0].name; p1[1].textContent = lista[0].price + " kr";
    p2[0].textContent = lista[1].name; p2[1].textContent = lista[1].price + " kr";
    p3[0].textContent = lista[2].name; p3[1].textContent = lista[2].price + " kr";
    p4[0].textContent = lista[3].name; p4[1].textContent = lista[3].price + " kr";
    p5[0].textContent = lista[4].name; p5[1].textContent = lista[4].price + " kr";
    p6[0].textContent = lista[5].name; p6[1].textContent = lista[5].price + " kr";
}