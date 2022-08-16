// step-1: add event listener to the deposite button
document.getElementById('btn-deposit').addEventListener('click',function(){
    
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add nyumbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;


    // step-5: get balance current total
    const balanceTotalWElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalWElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    
    // set the balance total
    balanceTotalWElement.innerText = currentBalanceTotal;


    // step-7: clear the deposit field
    depositField.value = '';


})