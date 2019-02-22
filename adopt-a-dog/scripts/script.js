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
 document.getElementById(dogName).style.background = 'tomato';
 document.getElementById(dogName).innerHTML = 'Unadopt';
 // button will now execute unadopt function when pressed
 document.getElementById(dogName).setAttribute('onclick', 'unadopt(this.id)');
 // changes total indicator on the header
 document.getElementById('cart').innerHTML = `<i class='fas fa-shopping-cart'></i>  $${Number((checkoutTotal).toFixed(2))}`;
}
function unadopt(clicked_id){
// gets the dogs name by checking id
 dogName = clicked_id;
// substracts dog's price from your total
 checkoutTotal = checkoutTotal - dogPrice;
// alerts dog's name and new total
// (decided to round to 2 decimals since it was resulting in $864.1500000000001 when ading the seventh dog. OCD i guess)
 alert(`You removed ${clicked_id} from your adoption list. Your total is now: $${Number((checkoutTotal).toFixed(2))}`);
// visually changes button once clicked
 document.getElementById(dogName).style.background = '#81b741';
 document.getElementById(dogName).innerHTML = 'Adopt';
 // button will now execute dogAdded function when pressed
 document.getElementById(dogName).setAttribute('onclick', 'dogAdded(this.id)');
 // changes total indicator on the header
 document.getElementById('cart').innerHTML = `<i class='fas fa-shopping-cart'></i>  $${Number((checkoutTotal).toFixed(2))}`;
}



// Discovered you can just alert an images alt text so why not use it as an alert
function dogInfo(clicked_alt) {
// gets dogs info by checking alt
 dogAlt = clicked_alt;
// splits the alt info into an array
 dogPoint = dogAlt.split('-');
 // displays each info separate
 dogPoint.forEach(function(item,index){
  alert(`${item}`);
  });
}
