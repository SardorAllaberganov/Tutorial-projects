const productList = document.getElementById("product-list");
const listItem = productList.querySelectorAll("li");
const searchItem = document.getElementById("search-item");

for (const product of listItem) {
    searchItem.addEventListener("keyup", (event) => {
        if (
            !product.textContent
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
        ) {
            product.style.display = "none";
        } else {
            product.style.display = "";
        }
    });
}
