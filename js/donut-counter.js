//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts

//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.

//use parseInt to convert the users answer from a string to an integer.


function getter (things) {
  return parseInt(prompt(`Enter the number of ${things}, please.`, 0))
}

var donuts =getter("donuts")
var guests =getter("guests")

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

function reporter (donuts, guests) {
  if (donuts >= guests) {
    return `There are ${donuts} donuts and ${guests}, so there are enough!`
  }
  else {
    return `There are ${donuts} donuts and ${guests}, so there aren't enough...`
  }
}

 alert (reporter (donuts, guests))
