// Home Page Form Trnasformation
document.getElementById('cashOutBtn').addEventListener('click',function(){
    document.getElementById('addMoneyForm').classList.add('hidden')
    document.getElementById('cashOutForm').classList.remove('hidden')

})

document.getElementById('addMoneyBtn').addEventListener('click',function(){
    document.getElementById('addMoneyForm').classList.remove('hidden')
    document.getElementById('cashOutForm').classList.add('hidden')

})