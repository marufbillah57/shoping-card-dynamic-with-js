// console.log('I am in a separate file');
document.getElementById('phone-plus').addEventListener('click', function(){
    /* const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    phoneInput.value = phoneCount + 1; */
    productInput('phone', true, 1219);
});

// phone minus  handle
document.getElementById('phone-minus').addEventListener('click', function(){
   /*  const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    phoneInput.value = phoneCount - 1; 
    */
   productInput('phone', false, 1219);
});

// case plus handler
document.getElementById('case-plus').addEventListener('click', function(){
    productInput('case', true, 59);
});
// case minus handler
document.getElementById('case-minus').addEventListener('click', function(){
    productInput('case', false, 59);
});

// phone plus and minus handle
function productInput(product, isAdd, price){
    const productInput = document.getElementById(product + '-count');
    let productCount = parseInt(productInput.value);
    if(isAdd == true){
        productCount = productCount + 1;
    } else if(productCount > 0) {
        productCount = productCount - 1;
    }

    productInput.value = productCount;

    // total phone cost
    const productTotalCost = document.getElementById(product + '-total-cost');
    productTotalCost.innerText = productCount * price;

    // total case cost 
    const caseTotalCost = document.getElementById(product + '-total-cost');
    caseTotalCost.innerText = productCount * price;

    // 
    totalCalculate();
}

function getInputValue(product){
    const caseInput = document.getElementById(product + '-count');
    const caseCount = parseInt(caseInput.value);
    return caseCount;
}
function totalCalculate(){
    const phoneTotalCost = getInputValue('phone') * 1219;
    const caseTotalCost = getInputValue('case') * 59;
    const subTotal = phoneTotalCost + caseTotalCost;
    const taxAmount = subTotal / 10;
    const totalCost = subTotal + taxAmount
   // update on the html
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = taxAmount;
   document.getElementById('total-price').innerText = totalCost;

}