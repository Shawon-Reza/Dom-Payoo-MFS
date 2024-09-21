// Home Page Form Trnasformation
// CashOut Button
document.getElementById('cashOutBtn').addEventListener('click', function () {
    document.getElementById('addMoneyForm').classList.add('hidden')
    document.getElementById('cashOutForm').classList.remove('hidden')
    document.getElementById('histoyDIv').classList.add('hidden')

})
// AddMoney Button
document.getElementById('addMoneyBtn').addEventListener('click', function () {
    document.getElementById('addMoneyForm').classList.remove('hidden')
    document.getElementById('cashOutForm').classList.add('hidden')
    document.getElementById('histoyDIv').classList.add('hidden')
    console.log("addMoney")


})

// History Button
document.getElementById('historyBtn').addEventListener('click', function () {
    console.log("History")
    document.getElementById('histoyDIv').classList.remove('hidden')

    document.getElementById('addMoneyForm').classList.add('hidden')
    document.getElementById('cashOutForm').classList.add('hidden')
})


//Add Money Process
document.getElementById('addMoneyProcess').addEventListener('click', function (event) {
    event.preventDefault();
    const AddMoney = numberValidation('addMoneyAmount');
    const pin = numberValidation('pinForAddMoney');
    if (pin === 123 && AddMoney > 0) {
        let total = document.getElementById('totalMoney').innerText
        total = parseFloat(total)
        total += AddMoney;
        document.getElementById('totalMoney').innerText = total;
        const div = document.createElement('div')
        div.innerHTML = `<p>Add Money: ${AddMoney}</p><p>Total Balance: ${total}</p> <br>`;

        document.getElementById('histoyDIv').appendChild(div);



    } else {
        alert('Invalid')
    }
})

