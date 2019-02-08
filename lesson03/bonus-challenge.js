// CARD DECK Lesson 03 Assignment 5 - Bonus

// ARRAY
let cards = [['of Hearts', 'of Diamonds', 'of Spades', 'of Clubs'] , ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']]

// LOOP
for (let i = 0; i < cards[0].length ; i++){
  for (let j = 0; j < cards[1].length ; j++){
  console.log(`${cards[1][j]} ${cards[0][i]}`);
  }
}
