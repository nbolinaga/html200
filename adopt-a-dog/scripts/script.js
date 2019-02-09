let checkoutTotal = 0;
let dogPrice = 123.45;
let dogName;

function dogAdded(clicked_id) {
// gets the dogs name by checking id
 dogName = clicked_id;
// adds dog's price to your total
 checkoutTotal = checkoutTotal + dogPrice;
// alerts dog's name and new total
// (decided to round to 2 decimals since it was resulting in $864.1500000000001 when ading the seventh dog. OCD i guess)
 alert(`You added ${clicked_id} to your adoption list. Your total is now: $${Number((checkoutTotal).toFixed(2))}`);
// visually changes button once clicked
 document.getElementById(dogName).style.background = "tomato";
 // still dont know how to unpress button (unadopt)
 document.getElementById(dogName).innerHTML = "Unadopt";
 // button is no longer clickable
 document.getElementById(dogName).disabled = true;
}

// Discovered you can just alert an images alt text so why not use it as an alert
function dogInfo(clicked_alt) {
// gets dogs info by checking alt
 dogAlt = clicked_alt;
 // alerts dog's alt
 alert(dogAlt);
}
