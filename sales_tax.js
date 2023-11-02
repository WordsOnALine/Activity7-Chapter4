"use strict";

const $ = selector => document.querySelector(selector);

// the calculate button that calculates the calculation when you click the calculate button for calculating
const button_calculate = document.getElementById("calculate");
button_calculate.addEventListener("click", processEntries);

const button_clear = document.getElementById("clear");

// clears the inputs upon clicking the clear button
button_clear.addEventListener("click", () => {

    // I tried getting it to select all the element ids but I couldn't figure that out so I just did it seperately 
    document.getElementById("subtotal").value = '';
    document.getElementById("tax_rate").value = '';
    document.getElementById("sales_tax").value = '';
    document.getElementById("total").value = '';

    // this focuses the typing line to the subtotal textbox upon clearing the field
    const input = document.getElementById('subtotal');
    const end = input.value.length;
    input.setSelectionRange(end, end);
    input.focus();
});

// this focuses the typing line to the subtotal textbox upon the page being launched
const input = document.getElementById("subtotal");
const end = input.value.length;
input.setSelectionRange(end, end);
input.focus();




// the math funtion for the subtotal and the sales tax and total
function processEntries() {
    const subtotal = Number(document.getElementById("subtotal").value);
    const tax_rate = Number(document.getElementById("tax_rate").value);

    // range check
    if (subtotal < 0 || subtotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
    } else if (tax_rate < 0 || tax_rate > 12) {
        alert("Tax Rate must be > 0 and < 12");
    } else {
        const sales_tax = subtotal * tax_rate;
        const total = subtotal + sales_tax;
        document.getElementById("sales_tax").value = sales_tax;
        document.getElementById("total").value = total;

        // this focuses the typing line to the end of the subtotal textbox
        const input = document.getElementById('subtotal');
        const end = input.value.length;
        input.setSelectionRange(end, end);
        input.focus();
    }
}