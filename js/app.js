
//getPin 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const stringPin = pin + '';
    if (stringPin.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('displayPin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == "C") {
            typeInput.value = '';
        }
    } else {
        typeInput.value += number;
    }
  
})


function verifyPin() {
    const pin = document.getElementById('displayPin').value;
    const typeInput = document.getElementById('type-numbers').value;
    const success = document.getElementById('success');
    const error = document.getElementById('error');
    if (pin == typeInput) {
        success.style.display = "block";
        error.style.display = "none";
       
    } else {
        error.style.display = "block";
         success.style.display = "none";
   }
}
const product = 5;
const price = '7';
const subTotal = product * price;
const tax = subTotal / 10;
const total = subTotal + tax;
console.log("subTotal:"+ subTotal);
console.log("tax:"+ tax);
console.log("total:"+ total);