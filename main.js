const userAge = parseInt(prompt('inserisci la tua età'));

const userJourney = parseInt(prompt('inserisci i km da percorrere'));

console.log(userAge, userJourney);

const pricePerkm = 0.21;

let ticketPrice = pricePerkm;

console.log(ticketPrice)

ticketPrice = ticketPrice * userJourney;

if (userAge < 18) {

    const discount = ((ticketPrice * 20) / 100);
    ticketPrice = ticketPrice - discount;

}

else if (userAge > 65) {

    const discount = ((ticketPrice * 40) / 100);
    ticketPrice = ticketPrice - discount;

}


document.getElementById('user-age').innerHTML = userAge;

document.getElementById('user-journey').innerHTML = userJourney;


/* arrotondo */

ticketPrice = ticketPrice.toFixed(2);

console.log(ticketPrice);

document.getElementById('ticket-price').innerHTML = ticketPrice;







