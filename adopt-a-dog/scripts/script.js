
let checkoutTotal = 0;
localStorage.setItem('zero', checkoutTotal);

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
 $(`#${dogName}`)[0].style.background = 'tomato';
 $(`#${dogName}`)[0].innerHTML = 'Unadopt';
 // button will now execute unadopt function when pressed
 $(`#${dogName}`)[0].setAttribute('onclick', 'unadopt(this.id)');
 // changes total indicator on the header
 $('#cart')[0].innerHTML = `<i class='fas fa-shopping-cart'></i>  $${Number((checkoutTotal).toFixed(2))}`;
 localStorage.setItem('zero', checkoutTotal);
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
 $(`#${dogName}`)[0].style.background = '#81b741';
 $(`#${dogName}`)[0].innerHTML = 'Adopt';
 // button will now execute dogAdded function when pressed
 $(`#${dogName}`)[0].setAttribute('onclick', 'dogAdded(this.id)');
 // changes total indicator on the header
 $('#cart')[0].innerHTML = `<i class='fas fa-shopping-cart'></i>  $${Number((checkoutTotal).toFixed(2))}`;
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
