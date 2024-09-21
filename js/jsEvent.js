// Catch The Login Button
document.getElementById('loginBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const number = numberValidation('inputphone');
    const pin = numberValidation('inputPin');
    if (number === 123 && pin === 123) {
        console.log("Correct Reza");
        location.href='/home.html';
    } else {
        alert("Wrong Phone or Pin")
    }
})