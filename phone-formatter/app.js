const phoneNumberInput = document.getElementById("phone-number");

const formatPhoneNumber = (number, format = "xxx-xxx-xxx") => {
    let result = "";
    let currIndex = 0;

    format.split("").forEach((char) => {
        if (char.toLocaleLowerCase() === "x") {
            result += number.charAt(currIndex);
            currIndex++;
        } else {
            result += char;
        }
    });
    return result;
};

phoneNumberInput.addEventListener("change", formatPhoneNumber("124124124"));
// phoneNumberInput.addEventListener('onkeydown', formatPhoneNumber(this.value, "xx xxx xx xx"))
// console.log(formatPhoneNumber("974313528", "xx xxx xx xx"));
