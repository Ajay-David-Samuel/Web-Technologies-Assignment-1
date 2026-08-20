function calculateAmount(quantity, price) {
  return quantity * price;
}

function calculateTotal(amounts) {
  let total = 0;
  for (let i = 0; i < amounts.length; i++) {
    total = total + amounts[i];
  }
  return total;
}

function calculateDiscount(total) {
  if (total > 3000) {
    return total * 0.07;
  } else {
    return 0;
  }
}

function generateInvoice() {
  let quantities = [];
  let prices = [];
  let amounts = [];
  let error = document.getElementById("error");

  for (let i = 1; i <= 3; i++) {
    let quantity = Number(document.getElementById("qty" + i).value);
    let price = Number(document.getElementById("price" + i).value);

    if (quantity <= 0 || price < 0 || document.getElementById("qty" + i).value == "" || document.getElementById("price" + i).value == "") {
      error.innerHTML = "Please enter valid quantity and price for all items.";
      return;
    }

    quantities.push(quantity);
    prices.push(price);
    amounts.push(calculateAmount(quantity, price));
  }

  error.innerHTML = "";

  let total = calculateTotal(amounts);
  let discount = calculateDiscount(total);
  let finalAmount = total - discount;

  for (let i = 1; i <= 3; i++) {
    let itemName = document.getElementById("item" + i).value;
    if (itemName == "") {
      itemName = "Item " + i;
    }
    document.getElementById("billItem" + i).innerHTML = itemName;
    document.getElementById("billQty" + i).innerHTML = quantities[i - 1];
    document.getElementById("billPrice" + i).innerHTML = prices[i - 1].toFixed(2);
    document.getElementById("amount" + i).innerHTML = amounts[i - 1].toFixed(2);
  }

  document.getElementById("total").innerHTML = total.toFixed(2);
  document.getElementById("discount").innerHTML = discount.toFixed(2);
  document.getElementById("finalAmount").innerHTML = finalAmount.toFixed(2);
  document.getElementById("bill").style.display = "block";
}

function resetInvoice() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("item" + i).value = "";
    document.getElementById("qty" + i).value = "";
    document.getElementById("price" + i).value = "";
  }
  document.getElementById("error").innerHTML = "";
  document.getElementById("bill").style.display = "none";
}