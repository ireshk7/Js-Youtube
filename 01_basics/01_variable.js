const accountId = 144533 
let accountEmail = "Iresh@gmail.com"
var accountPassword = "12345"
accountCity="Belagavi"

// accountId =  2;  Not Allowed
accountEmail="Nicky@ik.com";
accountPassword=12425;
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity]);

/*
Prefer not to use var 
because of issues in block scope and function scope    
*/

console.log(accountId);

