const gridDisplay = document.getElementById("grid");

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

function flipCard(){
    const cardId = this.getAttribute("data-id"); //to get the data id of the card currently clicked
    console.log(cardArray[cardId].name);
    console.log("card clicked",cardId);
}