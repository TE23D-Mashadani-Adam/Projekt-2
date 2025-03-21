let totalPrisElement = document.querySelector(".total_pris");
let betalning_div = document.querySelector(".betalnings_div");
let button = document.querySelector("button");
let h2 = document.querySelector("h2");

let go_back_btn_div = document.querySelector(".go_back_btn_div");

let price = 0;


price = hämta_från_local_storage();

totalPrisElement.textContent = "Att betala: " + price + " kr";

document.addEventListener("DOMContentLoaded", function () {
    button.addEventListener("click", function () {
        betalning_page();
    })
})





function hämta_från_local_storage(price) {
    let total_pris = window.localStorage.getItem("betalning_nyckel");

    if (total_pris == null) {
        return;
    }
    else

        price = JSON.parse(total_pris);
    return price;
}

function betalning_page() {
    betalning_div.remove();
    h2.textContent = "Tack för betalning!";
    let go_back_btn = document.createElement("button");
    go_back_btn.textContent = "GÅ TILLBAKA";
    go_back_btn.style.width = "200px";
    go_back_btn.style.margin = "10px";
    go_back_btn_div.appendChild(go_back_btn);

    go_back_btn.addEventListener("click", function () {
        location.replace("http://127.0.0.1:5500/index.html");
    })
}