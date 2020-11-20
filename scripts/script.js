let randomColors = [
    '#6bdf12',
    '#57d29d',
    '#65179c',
    '#74125c',
    '#ba265b',
    '#076196'    
]
const root = document.documentElement;
let currColor = 5;
let displayText = document.getElementById('text');
let displayAuthor = document.getElementById('author');
let quotesURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let quotesFromUrl = [];
let currQuote = '';
let currAuthor = '';


function loadQuotes(){
    fetch(quotesURL)  //research this
        .then(res => res.json())
        .then((out) => {
            quotesFromUrl = out;
    })
    .catch(err => { throw err });
}

function changeColor(){
    let newColor = Math.floor((Math.random() * randomColors.length));
    if(newColor == currColor){
        changeColor();
    }
    currColor = newColor;
    root.style.setProperty('--main-color', randomColors[newColor]);
}

function getNewQuote(){
    changeColor();
    let newIndex = Math.floor((Math.random() * quotesFromUrl.quotes.length));
    currQuote = quotesFromUrl.quotes[newIndex].quote;
    currAuthor = quotesFromUrl.quotes[newIndex].author;
    displayText.innerHTML = '"' + currQuote + '"';
    displayAuthor.innerHTML = '-' + currAuthor;
}

const newQuote = document.getElementById('new-quote');

newQuote.addEventListener('click', getNewQuote);
loadQuotes()