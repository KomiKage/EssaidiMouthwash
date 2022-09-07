var _stock0 = 3;
var _stock1 = 17;
var _stock2 = 1;

var _price0 = 12;
var _price1 = 3.5;
var _price2 = 71000000000;

var _bought0 = 0;
var _bought1 = 0;
var _bought2 = 0;

var _totalPrice = 0;
var totalPriceVAT = 0
var purchased = false;

function load(){
    document.getElementById("item0").innerHTML = "price : $12";
    document.getElementById("item1").innerHTML = "price : $3.50";
    document.getElementById("item2").innerHTML = "price : $71.000.000.000";
    document.getElementById("stock0").innerHTML = "stock : " + _stock0;
    document.getElementById("stock1").innerHTML = "stock : " + _stock1;
    document.getElementById("stock2").innerHTML = "stock : " + _stock2;
}

function buy0(){
    if(_stock0 > 0 && purchased == false)
    {
        _stock0--;
        document.getElementById("stock0").innerHTML = "stock : " + _stock0;
        _totalPrice += _price0;
        totalPriceVAT = _totalPrice * 1.21;
        totalPriceVAT = totalPriceVAT.toFixed(2);
        _bought0++;
        document.getElementById("bought0").innerHTML = "Star Wars: The Holiday Special x" + _bought0;
        document.getElementById("purchaseButton").innerHTML = "subtotal + VAT : $" + totalPriceVAT;
        document.getElementById("totalPrice").innerHTML = "subtotal : $" + _totalPrice;
    }
}

function buy1(){
    if(_stock1 > 0 && purchased == false)
    {
        _stock1--;
        document.getElementById("stock1").innerHTML = "stock : " + _stock1;
        _totalPrice += _price1;
        totalPriceVAT = _totalPrice * 1.21;
        totalPriceVAT = totalPriceVAT.toFixed(2);
        _bought1++;
        document.getElementById("bought1").innerHTML = "Big Mac x" + _bought1;
        document.getElementById("purchaseButton").innerHTML = "subtotal + VAT : $" + totalPriceVAT;
        document.getElementById("totalPrice").innerHTML = "subtotal : $" + _totalPrice;
    }
}

function buy2(){
    if(_stock2 > 0 && purchased == false)
    {
        _stock2--;
        document.getElementById("stock2").innerHTML = "stock : " + _stock2;
        _totalPrice += _price2;
        totalPriceVAT = _totalPrice * 1.21;
        totalPriceVAT = totalPriceVAT.toFixed(2);
        _bought2++;
        document.getElementById("bought2").innerHTML = "Libya x" + _bought2;
        document.getElementById("purchaseButton").innerHTML = "subtotal + VAT : $" + totalPriceVAT;
        document.getElementById("totalPrice").innerHTML = "subtotal : $" + _totalPrice;
    }
}

function purchase(){
    purchased = true;
    document.getElementById("purchaseButton").innerHTML = "Purchase Complete";
}