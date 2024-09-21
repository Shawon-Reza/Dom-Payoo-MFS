// Number Cheack
function numberValidation(id) {
    const givenInputNumber = document.getElementById(id).value
    const Number = parseFloat(givenInputNumber)
    // console.log('reza',Number)

    if (!isNaN(Number)){
        return Number;
    } 
}