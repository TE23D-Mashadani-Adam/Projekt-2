let totalPrisElement = document.querySelector(".total_pris");

let price = 0;

price = hämta_från_local_storage();

totalPrisElement.textContent = "Att betala: " + price + " kr";

function hämta_från_local_storage(price)
{
    let total_pris = window.localStorage.getItem("betalning_nyckel");

    if (total_pris == null)
    {
        return;
    }
    else

    price = JSON.parse(total_pris);
    return price;
}