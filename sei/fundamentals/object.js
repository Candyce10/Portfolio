const game = {
    title: 'Guess the Number!',
    biggestNum: 100,

}

game.numGuesses = 0
console.log(game)



const catalog = {
    a1: 10,
    a2: 20,
    a3: 30,
    a4: 40,
}

let sku = '';
while (sku !== 'quit') {
  sku = prompt('Enter SKU or "quit" to exit: ');
  let price = catalog[sku];
  if (sku !== 'quit') alert(`The price of ${sku} is ${price}`);
}



const SEIR = {
    classSize= 70,
    startDate = "march 21",
    endDate = "june 13",
    units = 4,
    isChallenging = true,
    isRemote = true,
    topicsCovered = ["javascript", "html", "css"],
    IA = "Howey"
};

const ship = {
    name: 'Millennium Falcon',
    speed: 11,
    crew: ['Han Solo', 'Chewbacca'],
    passengers: ['Leia'],
    famous: true,
    heardOfIt: function() {
      console.log("You've never heard of the millennium falcon!?");
      this.famous = false;
    },
    addPassenger: function(passenger) {
      this.passengers.push(passenger);
    },
    removePassenger: function(passenger) {
      let index = this.passengers.indexOf(passenger);
      this.passengers.splice(index, 1);
    }
  };
  