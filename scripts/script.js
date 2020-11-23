let randomColors = [
    {r : 107, g: 223, b: 18},
    {r : 87, g: 210, b: 157},
    {r : 101, g: 23, b: 156},
    {r : 116, g: 18, b: 92},
    {r : 186, g: 38, b: 91},
    {r : 7, g: 97, b: 150}
];
const root = document.documentElement;
const reTweet = document.getElementById('tweet-quote');
let currColor = 5;
let displayText = document.getElementById('text');
let displayAuthor = document.getElementById('author');
let quotesURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let quotesFromUrl = [];
let currQuote = '';
let currAuthor = '';


function updateBackground(r,g,b){
    setTimeout(() => root.style.setProperty('--main-color', "rgb("+r+","+g+","+b+")"),10);
}

function loadQuotes(){
    fetch(quotesURL)  //research this
        .then(res => res.json())
        .then((out) => {
            quotesFromUrl = out;
            getNewQuote();
    })
    .catch(err => { throw err });
    
}

function changeColor(){
    let newColor = Math.floor((Math.random() * randomColors.length));
    if(newColor == currColor){
        changeColor();
    }
    
    
    let newRed = randomColors[newColor].r;
    let newGreen = randomColors[newColor].g;
    let newBlue = randomColors[newColor].b;
    
    currColor = newColor;
    
    updateBackground(newRed,newGreen,newBlue);
}

function getNewQuote(){
    changeColor();
    let newIndex = Math.floor((Math.random() * quotesFromUrl.quotes.length));
    currQuote = quotesFromUrl.quotes[newIndex].quote;
    currAuthor = quotesFromUrl.quotes[newIndex].author;
    displayText.innerHTML = '"' + currQuote + '"';
    displayAuthor.innerHTML = '-' + currAuthor;
    reTweet.href = 'https://twitter.com/intent/tweet?text=' + currQuote + " -" + currAuthor;
}

loadQuotes();

const newQuote = document.getElementById('new-quote');
newQuote.addEventListener('click', getNewQuote);


