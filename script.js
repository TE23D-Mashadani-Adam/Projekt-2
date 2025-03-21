let addBtn = document.querySelector(".button");
let kundvagn = document.querySelector(".kundvagn_produkter");
let price_element = document.querySelector(".pris_element");
let totalPriceDiv = document.createElement("p");

let more_icon = document.querySelector("#more_icon");


let kundvagnDiv = document.querySelector("#kundvagn");

const betalningNyckel = "betalning_nyckel";

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
        price: 199,
        quantity: 1
    },
    {
        name: "Beast Whey Protein",
        price: 899,
        quantity: 1
    },
    {
        name: "Gold Whey Protein",
        price: 1999,
        quantity: 1
    },
    {
        name: "Pure Whey Protein",
        price: 699,
        quantity: 1
    },
    {
        name: "Isopure Protein",
        price: 9,
        quantity: 1
    },
    {
        name: "Egg White Protein",
        price: 8999,
        quantity: 1
    },
];

let amountProductsInCart = 0;
let maxProductsInCart = 5;

ImplementObjectInformation();

let firstClick = false;
let price = 0;

let nav2_mobile = document.querySelector(".nav2_mobil");
let main = document.querySelector("main");
let nav2_mobile_opened = false;


//Lägger till rätt produkt i kundvagn när användare klickar
document.addEventListener("DOMContentLoaded", function () {

    more_icon.addEventListener("click", function () {
        if (!nav2_mobile_opened) {
            nav2_mobile.style.display = "flex";
            main.style.display = "none";
            kundvagnDiv.style.display = "none";
            nav2_mobile_opened = true;
        }else{
            nav2_mobile.style.display = "none";
            main.style.display = "flex";
            kundvagnDiv.style.display = "flex";
            nav2_mobile_opened = false;
        }
    });


    document.querySelectorAll(".produkt button").forEach((button, i) => {
        button.addEventListener("click", function () {
            CartFunction(i);
        });

    });

    let kundvagnBtn = document.querySelector(".kundvagn_btn");
    kundvagnBtn.addEventListener("click", function () {
        SparaPrisLocalStorage(price);
        window.location.replace("http://127.0.0.1:5500/betalning.html");
    });

});


//En metod för dålig kvalite produkt 
function AddLowQualityItem() {
    alert("Var försiktig, den varan är så dålig att din chans att överleva efter " +
        "att ha ätit den, ungefär vid 60%, 90% njurproblem och andra infektioner"
    )
}

//Lägger till informationen
function ImplementObjectInformation() {
    let elements = [p1, p2, p3, p4, p5, p6];

    for (let i = 0; i < elements.length; i++) {
        elements[i][0].textContent = lista[i].name;
        elements[i][1].textContent = lista[i].price + " kr";
    }
}

let cart = [];

function CartFunction(i) {

    if (amountProductsInCart < maxProductsInCart && !cart.includes(i)) {

        let productDiv = document.createElement("div");
        productDiv.classList.add("produkt_inuti_kundvagn");


        let cartItemName = document.createElement("p");
        cartItemName.textContent = lista[i].name;

        let priceInProductDiv = document.createElement("p");
        priceInProductDiv.textContent = lista[i].price + " kr";

        let btnInProductDiv = document.createElement("button");
        btnInProductDiv.style.backgroundColor = "red";
        btnInProductDiv.textContent = "TA BORT";


        totalPriceDiv.classList.add("total_pris");

        let quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = 1;
        quantityInput.min = 1;
        quantityInput.max = 20;


        quantityInput.addEventListener("input", function () {
            if (quantityInput.value > 20) {
                quantityInput.value = 20;
            }
            else if (quantityInput.value < 1) {
                quantityInput.value = 1;
            }

            let previousPrice = lista[i].price * lista[i].quantity;
            price -= previousPrice;

            lista[i].quantity = quantityInput.value;
            price += lista[i].price * quantityInput.value;

            totalPriceDiv.textContent = "Att betala: " + price + " kr";
            priceInProductDiv.textContent = lista[i].price * quantityInput.value + " kr";

        })

        quantityInput.style.width = "50px";
        quantityInput.style.margin = "5px";

        // Uppdatera totalpriset och kundvagnen
        totalPrice = lista[i].price * lista[i].quantity;
        price += totalPrice;
        totalPriceDiv.textContent = "Att betala: " + price + " kr";


        btnInProductDiv.addEventListener("click", function () {
            productDiv.remove();
            amountProductsInCart--;

            let index = cart.indexOf(i);
            cart.splice(index);

            price -= lista[i].price * quantityInput.value;
            UpdatePriceInCart(price, totalPriceDiv, lista, i);

            if (price <= 0) { totalPriceDiv.textContent = ""; }
            else {
                totalPriceDiv.textContent = "Att betala: " + price + " kr";
            }

            kundvagnDiv.style.height += productDiv.style.height;
            SparaPrisLocalStorage(price);

        });

        productDiv.append(cartItemName, priceInProductDiv, quantityInput, btnInProductDiv);
        kundvagn.appendChild(productDiv);
        price_element.appendChild(totalPriceDiv);



        amountProductsInCart++;
        cart.push(i);
    }
    else {
        if (cart.includes[i]) {
            alert("Din kundvagn är full, du kan inte lägga till mer än 5 saker");
        }
        else {
            alert("Produkten finns redan i kundvagnen");
        }
    }
}


function UpdatePriceInCart(price, totalPrice, lista, i) {
    totalPrice.textContent = price > 0 ? "Att betala: " + price + " kr" : "";
}

function SparaPrisLocalStorage(price) {
    let totalPris = JSON.stringify(price);
    window.localStorage.setItem(betalningNyckel, totalPris);
}