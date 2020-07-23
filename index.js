 // event login button handler
 const loginbtn = document.getElementById('login') ;
 loginbtn.addEventListener("click", function(){
     // console.log("Amake click marche....")
     const loginArea = document.getElementById('login-area') ;
     const emailInput = document.getElementById('email').value ;
     const passwordInput = document.getElementById('password').value ;
    
     // console.log(emailInput, passwordInput) ;
     if(emailInput=='saruj.chy222@gmail.com' && passwordInput == 'Sarose'){
       loginArea.style.display = 'none' ;
       const transactionArea = document.getElementById('transaction-area') ;
       transactionArea.style.display = 'block' ;
     }
     else{
       alert('This site is protected by admin') ;
       document.getElementById('email').value = "" ;
       document.getElementById('password').value = "" ;
     }

     
   
 })

 //event deposit button handler
 const depositBtn = document.getElementById('addDeposit') ;
 depositBtn.addEventListener('click', function(){
       const depositNumb = getInputNumber('depositAmount') ;
   // console.log("depositNumber",depositNumb) ;

   // const currentDeposit = document.getElementById('currentdeposit').innerText ;
   // const currentDepositNumber = parseFloat(currentDeposit) ;

   // console.log("current", currentDepositNumber) ;

   // const total = currentDepositNumber + depositNumb ;
   // console.log(total);

   // document.getElementById('currentdeposit').innerText = total ;
  

//balance add handler
   // const currentBalance = document.getElementById('current-balance').innerText ;
   // const currentBalanceNumber = parseFloat(currentBalance) ;

   // const totalBalance = currentBalanceNumber + depositNumb ;
   // document.getElementById('current-balance').innerText = totalBalance ;

   UpdateSpanText('currentdeposit', depositNumb) ;
   UpdateSpanText('current-balance', depositNumb) ;

   document.getElementById('depositAmount').value = "" ;


 })


 //event withdraw button handler
 const withdrawBtn = document.getElementById('addWithdraw') ;
 withdrawBtn.addEventListener('click', function(){
   const withdrawNumb = getInputNumber('withdrawAmount') ;

   const currentWithdraw = document.getElementById('current-withdraw').innerText ;
   const currentWithdrawNumber = parseFloat(currentWithdraw) ;

   const total = withdrawNumb + currentWithdrawNumber ;
   document.getElementById('current-withdraw').innerText = total ;

   
   const currentBalance = document.getElementById('current-balance').innerText ;
   const currentBalanceNumber = parseFloat(currentBalance) ;

   const totalBalance = currentBalanceNumber - withdrawNumb ;
   document.getElementById('current-balance').innerText = totalBalance ;

   document.getElementById('withdrawAmount').value  = "" ;
 })

 function getInputNumber(id){
   const inputAmount = document.getElementById(id).value ;
   const inputAmountNumb = parseFloat(inputAmount) ;
   return inputAmountNumb ;
 }

 function UpdateSpanText(id, depositNumb){
   const currentBalance = document.getElementById(id).innerText ;
   const currentBalanceNumber = parseFloat(currentBalance) ;

   const totalBalance = currentBalanceNumber + depositNumb ;
   document.getElementById(id).innerText = totalBalance ;
 }

 function DecreaseSpanText(id, depositNumb){
   const currentBalance = document.getElementById(id).innerText ;
   const currentBalanceNumber = parseFloat(currentBalance) ;

   const totalBalance = currentBalanceNumber - depositNumb ;
   document.getElementById(id).innerText = totalBalance ;
 }

 
