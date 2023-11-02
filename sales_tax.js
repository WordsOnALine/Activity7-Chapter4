"use strict";

const $ = selector => document.querySelector(selector);

const button_calculate = document.getElementById("calculate");
button_calculate.addEventListener("click", processEntries);

const button_clear = document.getElementById("clear");
button_clear.addEventListener("click", () => {

    // I tried getting it to select all the 
    document.getElementById("subtotal").value = '';
    document.getElementById("tax_rate").value = '';
    document.getElementById("sales_tax").value = '';
    document.getElementById("total").value = '';
    const input = document.getElementById('subtotal');
    const end = input.value.length;
    input.setSelectionRange(end, end);
    input.focus();
});

const input = document.getElementById("subtotal");
const end = input.value.length;
input.setSelectionRange(end, end);
input.focus();





function processEntries() {
    const subtotal = Number(document.getElementById("subtotal").value);
    const tax_rate = Number(document.getElementById("tax_rate").value);

    if (subtotal < 0 || subtotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
    } else if (tax_rate < 0 || tax_rate > 12) {
        alert("Tax Rate must be > 0 and < 12");
    } else {
        const sales_tax = subtotal * tax_rate;
        const total = subtotal + sales_tax;
        document.getElementById("sales_tax").value = sales_tax;
        document.getElementById("total").value = total;

        const input = document.getElementById('subtotal');
        const end = input.value.length;
        input.setSelectionRange(end, end);
        input.focus();
    }
}