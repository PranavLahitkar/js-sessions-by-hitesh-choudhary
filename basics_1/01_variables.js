const accountId = 144553
let accountEmail = "pranav@google.com"
var accountPassword = "12345"
accountCity = "Nashik"
let accountState;

// accountId = 2 // not allowed


accountEmail = "pranav@gmail.com"
accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
