const gridDisplay = document.getElementById("grid");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

//creating an array of pair of matching cards which are actually objects so array of objects
const cardArray = [
    {
        name: 'fries',
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name : "hotdog",
        img: "images/hotdog.png"
    },
    {
        name : "ice-cream",
        img : "images/ice-cream.png"
    },
    {
        name : "milkshake",
        img : "images/milkshake.png"
    },
    {
        name : "pizza",
        img : "images/pizza.png"
    },
    {
        name: 'fries',
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name : "hotdog",
        img: "images/hotdog.png"
    },
    {
        name : "ice-cream",
        img : "images/ice-cream.png"
    },
    {
        name : "milkshake",
        img : "images/milkshake.png"
    },
    {
        name : "pizza",
        img : "images/pizza.png"
    }
];

let cardsChosen = []; //store the names of the cards player has clicked
let cardsChosenId = []; //stores the ids of the cards player has clicked on 
let cardsWon = []; //stores the cards which were matched

//randomly sorting the above array
cardArray.sort(()=> 0.5-Math.random());

function createBoard(){
    for(let i = 0; i<cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute("src","images/blank.png");
        card.setAttribute("data-id",i);
        card.addEventListener("click",flipCard)
        //adding the img elements cards into the div element in each iteration of the loop
        gridDisplay.append(card);
    }
}

createBoard();

function checkMatch(){
    resultEl.textContent="";
    //creating an array selecting all the cards ie the image elements
    const cards = document.querySelectorAll("img");
    console.log("check for match");

    let firstId = cardsChosenId[0];
    let secondId = cardsChosenId[1];

    if(firstId==secondId){
        resultEl.textContent="You have clicked the same card!!";
        cards[firstId].setAttribute("src","images/blank.png");
        cards[secondId].setAttribute("src","images/blank.png");
    }
     
    else if(cardsChosen[0]===cardsChosen[1]){
        resultEl.textContent="You have found a match";
        //changing the color of the matched cards to distinguish from other cards
        cards[firstId].setAttribute("src","images/white.png");
        cards[secondId].setAttribute("src","images/white.png");

        //removing the actionListener from the two selected cards so that they cant be clicked once again
        cards[firstId].removeEventListener("click",flipCard);
        cards[secondId].removeEventListener("click",flipCard);

        cardsWon.push(cardsChosen[0]);
    }
    else{
        cards[firstId].setAttribute("src","images/blank.png");
        cards[secondId].setAttribute("src","images/blank.png");
        resultEl.textContent="Not a match! Try again!";
    }
    cardsChosen = [];
    cardsChosenId = [];
    scoreEl.textContent = cardsWon.length;

    if(cardsWon.length===(cardArray.length/2)){
        resultEl.textContent="Congratulations You got them all !!!\nGame Over";
        cards.forEach((elements)=>{
            elements.setAttribute("src","images/blank.png");
        });
    }
}

function flipCard(){
    const cardId = this.getAttribute("data-id"); //to get the data id of the card currently clicked
    //to get the card we clicked and confirm it got matched
    cardsChosen.push(cardArray[cardId].name);
    //changing the image of the clicked card to reveal what color it is actually
    this.setAttribute("src",cardArray[cardId].img);

    //pushing the id of the clicked card to the cardsChosenID array
    cardsChosenId.push(cardId);

    //When there are two cards in the choosen array, we should check if they matches or not
    if(cardsChosen.length===2){
        //using the setTimeout function to schedule a specified function to execute after a given time
        setTimeout(checkMatch,500); //scheduling the checkMatch function to execute after 5 milliseconds
    }
}