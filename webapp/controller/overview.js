var productsTable = document.getElementById("overview-table");

/**
 * Called when the products loading request succeeded.
 * @param request The request object.
 */
function onProductsLoaded(request) {
    //Remove the outdated product entries.
    productsTable.innerHTML = "";

    var products = JSON.parse(request.responseText);

    for (var i = 0; i < products.length; i++) {
        if (products[i].active == 1) {
            var productRow = document.createElement("tr");
            productsTable.appendChild(productRow);

            var skuCell = document.createElement("td");
            skuCell.innerText = products[i].sku;
            productRow.appendChild(skuCell);

            var nameCell = document.createElement("td");
            nameCell.innerText = products[i].name;
            productRow.appendChild(nameCell);

            var activeCell = document.createElement("td");
            activeCell.innerText = products[i].active;
            productRow.appendChild(activeCell);

            var priceCell = document.createElement("td");
            priceCell.innerText = products[i].price ? "CHF " + products[i].price : "";
            productRow.appendChild(priceCell);

            if (products[i].stock <= 3) {
                var stockCell = document.createElement("td");
                stockCell.innerText = products[i].stock;
                productRow.style.backgroundColor = "red";
                productRow.style.color = "white";
                productRow.appendChild(stockCell);
            } else {
            var stockCell = document.createElement("td");
            stockCell.innerText = products[i].stock;
            productRow.appendChild(stockCell);
            }
        }
    }
}

/**
 * Called when the products loading request failed.
 * @param request The request object.
 */
function onProductsLoadingError(request) {
    //Do noting if it is a 401 error, since the login form will already be shown at this point.
    if (request.status == 401) {
        return;
    }

    alert("Erör: " + request.statusText);
}

/**
 * Refreshes the products table with the newest product list from the API.
 */
function refreshProducts() {
    sendRequest("GET", "API/V1/Products", onProductsLoaded, onProductsLoadingError);
}

//Load the products initially.
refreshProducts();