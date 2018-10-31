var products = [];
var carts = [];   //array with the objects created when added to cart

function Item(flavour, qty, glazing, price) {
  
  this.flavour = flavour;
  this.qty = qty;
  this.glazing = glazing;
  this.price = price;
}

function addToCart1() {
  var flavour = document.getElementById("bun1").textContent;
  var qty = document.getElementById("amount1").value;
  var glazing = document.getElementById("glazing1").value;
  var price = document.getElementById("price1").textContent;

  var item1 = new Item(flavour, qty, glazing, price);
  carts.push(item1);
  cartQty();
  saveCart();
}
function addToCart2() {
  var flavour = document.getElementById("bun2").textContent;
  var qty = document.getElementById("amount2").value;
  var glazing = document.getElementById("glazing2").value;
  var price = document.getElementById("price2").textContent;

  var item2 = new Item(flavour, qty, glazing, price);
  carts.push(item2);
  cartQty();
  saveCart();
}
function addToCart3() {
  var flavour = document.getElementById("bun3").textContent;
  var qty = document.getElementById("amount3").value;
  var glazing = document.getElementById("glazing3").value;
  var price = document.getElementById("price3").textContent;

  var item3 = new Item(flavour, qty, glazing, price);
  carts.push(item3);
  cartQty();
  saveCart();
}
function addToCart4() {
  var flavour = document.getElementById("bun4").textContent;
  var qty = document.getElementById("amount4").value;
  var glazing = document.getElementById("glazing4").value;
  var price = document.getElementById("price4").textContent;

  var item4 = new Item(flavour, qty, glazing, price);
  carts.push(item4);
  cartQty();
  saveCart();
}
function addToCart5() {
  var flavour = document.getElementById("bun5").textContent;
  var qty = document.getElementById("amount5").value;
  var glazing = document.getElementById("glazing5").value;
  var price = document.getElementById("price5").textContent;

  var item5 = new Item(flavour, qty, glazing, price);
  carts.push(item5);
  cartQty();
  saveCart();
}
function addToCart6() {
  var flavour = document.getElementById("bun6").textContent;
  var qty = document.getElementById("amount6").value;
  var glazing = document.getElementById("glazing6").value;
  var price = document.getElementById("price6").textContent;

  var item6 = new Item(flavour, qty, glazing, price);
  carts.push(item6);
  cartQty();
  saveCart();
}

function cartQty() {
  document.getElementById("cartNum").innerHTML = carts.length;
}
function finalCartQty() {
  document.getElementById("finalCartNum").innerHTML = myCart.length;
}



function saveCart() {
  localStorage.setItem("carts",JSON.stringify(carts));
}

var myCart = JSON.parse(localStorage.getItem("carts"));

function loadCart() {

  for(var i = 0; i < myCart.length; i++) {
    var contain = document.createElement("div");
    contain.classList.add("bigContainer")
    
    var bunFlavour = document.createElement("div");
    bunFlavour.classList.add("flavourBun")
    bunFlavour.appendChild(document.createTextNode(myCart[i].flavour));

    var bunQty = document.createElement("div");
    bunQty.classList.add("quantityBun")
    bunQty.appendChild(document.createTextNode(myCart[i].qty));

    var bunGlazing = document.createElement("div");
    bunGlazing.classList.add("glazingBun")
    bunGlazing.appendChild(document.createTextNode(myCart[i].glazing));

    var bunPrice = document.createElement("div");
    bunPrice.classList.add("priceBun")
    bunPrice.appendChild(document.createTextNode("$" + myCart[i].price));


    var remove = document.createElement("button");
    remove.classList.add("delete-item")

    var removeText = document.createTextNode("X");
    remove.appendChild(removeText);

    contain.appendChild(bunFlavour);
    contain.appendChild(bunGlazing);
    contain.appendChild(bunQty);
    contain.appendChild(bunPrice);
    contain.appendChild(remove);
    document.getElementById("orders").appendChild(contain);



    var number = 0;
    var totalCost = number += parseFloat(myCart[i].price);
    console.log(totalCost);

    document.getElementById("totalCost").innerHTML = "Your total cost is: $" + totalCost;


  }  
  
$("button").click(function(){
  var index = $(this).parent().index();
  index = index -1;
  $(this).parent().remove();
  myCart.splice(index,1);
  localStorage.setItem("carts", JSON.stringify(carts))
  location.reload();
})
}

finalCartQty();
