const tog = document.getElementById("toggle");
const cash = document.getElementById("range");
const view = document.getElementById("view");
const price = document.getElementById("price");
price.value = 16;

tog.addEventListener("click", function () {
    if (tog.classList.contains("toggle_select")) {
        tog.classList.remove("toggle_select");
        price.innerHTML = `$${price.value.toFixed(2)}`
    } else {
        tog.classList.add("toggle_select");
        let discount;
        discount = (price.value * 12) * 0.75;
        price.innerHTML = `$${discount.toFixed(2)}`
    }
});

cash.addEventListener("input", function () {
    if(cash.value == "1"){
        view.innerHTML = "10k pageviews";
        price.value = 8;
        tog.classList.remove("toggle_select");
        price.innerHTML = "$8.00"
    }else if(cash.value == "2"){
        view.innerHTML = "50k pageviews";
        tog.classList.remove("toggle_select");
        price.value = 12;
        price.innerHTML = "$12.00"
    }else if(cash.value == "3"){
        view.innerHTML = "100k pageviews";
        tog.classList.remove("toggle_select");
        price.value = 16;
        price.innerHTML = "$16.00"
    }else if(cash.value == "4"){
        view.innerHTML = "500k pageviews";
        tog.classList.remove("toggle_select");
        price.value = 24;
        price.innerHTML = "$24.00"
    }else{
        view.innerHTML = "1m pageviews";
        tog.classList.remove("toggle_select");
        price.value = 36;
        price.innerHTML = "$36.00"
    }
}, false);