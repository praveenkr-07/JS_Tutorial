const accountId =  101
let accountEmail = "Praveenmahour.com"
var accPassword = "12345"
accCity = "Delhi"
let accState ; // undefined

//accountId = 102; // changr to const are not allowed

accountEmail = "Sujal@123.com"
accPassword = "123456"
accCity = "Mumbai"

/*
Prefer not to use var
because of issue in block scoope and functional scope
*/
console.table([accountId,accountEmail,accPassword,accCity,accState])