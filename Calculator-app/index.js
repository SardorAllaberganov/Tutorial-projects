const display = document.getElementById("display");
const button = document.getElementById("button");
const result = document.getElementById("result");

function appendNumber(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = 0;w
}
