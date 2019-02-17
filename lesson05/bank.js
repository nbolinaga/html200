// VARIABLES----------------------------------------------------------------------------
// Array of messages displayed, this way they can be shown as a list.
const messages = [];
 messages[0]='Type B to view your current balance.';
 messages[1]='Type D to make a deposit up to $50,000';
 messages[2]='Type W to withdraw from your account.';
 messages[3]='Type Q to quit program.';

// Sets starting balance to $1000.
let balance = 1000;
// prevents from showing more than 2 decimals.
balance = balance.toFixed(2);

// Welcome message when page is first open.
alert('Welcome to United Bank of America')


// MAIN WHILE LOOP----------------------------------------------------------------------
// While loop to check for Quit input.
while (true) {
// if balance drops below $300 warning message appears.
  if (balance < 300){
    alert('WARNING: Your balance is getting low, type B to check your current balance.')
  }
// Prompt displays Messages and takes response from user.
let input = prompt(messages.join("\n"));
// Converts input to upper Case incase user responded in lower case.
input = input.toUpperCase();
  
  
// BALANCE------------------------------------------------------------------------------
   if (input === "B"){
    alert(`Your current balance is $${balance}`);
    continue;
  }
  
  
//  DEPOSIT-----------------------------------------------------------------------------
   if (input === "D"){
//   While loop to go back to the start of this 'IF' and not the start of the first one.
     while (true){
       let deposit  = prompt('Make a deposit up to $50,000');
//       if the users enter a NaN or an invalid amount this 'IF' will run.
         if (isNaN(deposit) || deposit > 50000 || deposit == '' || 0 > deposit ){       
            alert('Enter a valid amount');
            continue;
//       if the user enter a valid amount else will run.
         } else {
            balance = Number(balance) + Number(deposit);
            balance = balance.toFixed(2);
            alert(`Your new balance is $${balance}`); 
            break;
         }
      continue;
    }  
  }
  
  
// WITHDRAW-----------------------------------------------------------------------------
  if (input === "W"){
//   While loop /number 2/ to go back to the start of this 'IF' and not the start of the first one.
     while (true){
       let withdrawal  = prompt('Set a withdrawal amount equal or lower to your current balance');
//       if the users enter a NaN or an invalid amount this 'IF' will run. Withdrawal has to be less than current balance.
         if (isNaN(withdrawal) || Number(balance) < Number(withdrawal) || withdrawal == ''){       
            alert('Enter a valid amount, it cannot be more than your current balance.');
            continue;
//       if the user enter a valid amount else will run.
         } else {
//          the withdrawal get put in a temporal variable to check if funds will be lower than $300. 
            TempBalance = Number(balance) - Number(withdrawal);
            TempBalance = TempBalance.toFixed(2);
//          While loop /number 3/ to go back to the start of this 'IF' and not the start of the first one.
            while (true){
//               If the funds are more than $300 the temporal balance becomes the actual balance.
                 if (TempBalance > 300){
                  balance = TempBalance;
                  alert(`Your new balance is $${balance}`); 
                  break;
//                If the funds are less than $300 this 'else' runs. Alerting the user.
                } else {
                  alert(`WARNING: if you continue your balance will be below $300`); 
//                  the user must confirm that their balance will become less than $300.
                    if (confirm('Press OK to continue')) {
//                      if they press OK the temporal balance becomes the actual balance.
                        balance = TempBalance;
                        alert(`You pressed OK, your new balance is $${balance}`); 
                  } else {
//                      if they press CANCEL the operation doesnt happen.
                        alert(`You canceled the withdrawal you balance is still $${balance}`); 
                      }
//                Break number 3
                  break;
                 }
               }
//         Break number 2
           break;
         }
     continue;
   }  
 }
  
  
// QUIT----------------------------------------------------------------------------------
  if (input === "Q"){
    alert('Thank you for using United Bank of America.');
    break;
  }
}  