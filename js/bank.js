//  bank Project
  // handle deposit button
 document.getElementById('deposite-button').addEventListener('click', function(){
  // get the amount deposited
    const depositInput = document.getElementById('deposite-input');
    const depositAmount = depositInput.value;
   const depositTotal = document.getElementById('deposit-total');
   const previousDepositTotal =  depositTotal.innerText;
   const newDepositTotal = parseFloat(previousDepositTotal)  + parseFloat(depositAmount);
   depositTotal.innerText = newDepositTotal;

  // update balance

   const balanceTotal = document.getElementById('balance-total');
   const previousBalanceTotal = balanceTotal.innerText;
   const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(depositAmount);
   balanceTotal.innerText = newBalanceTotal;

  //  clear the deposit input field
  depositInput.value = '';
 })

//  handle withdraw button

 document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmount = withdrawInput.value;
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawTotal = withdrawTotal.innerText;
  const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(withdrawAmount);
  withdrawTotal.innerText = newWithdrawTotal;
  withdrawInput.value = '';

  //  balace update

   const balanceTotal = document.getElementById('balance-total');
   const previousBalanceTotal = balanceTotal.innerText;
   const newBalanceTotal = previousBalanceTotal - withdrawAmount;
   balanceTotal.innerText = newBalanceTotal
 })