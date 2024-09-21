// Number Cheack
function numberValidation(id) {
    const givenInputNumber = document.getElementById(id).value
    const Number = parseFloat(givenInputNumber)
    if (!isNaN(Number)){
        return Number;
    } else{
        return;
    }
}

// 