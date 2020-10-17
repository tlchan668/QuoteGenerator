let btn = document.getElementById('btn');
let output = document.getElementById('output');

//array of quote
let quotes = [
    '"Stay Hungry. Stay Foolish.", Steve Jobs',
    '"Good Artists Copy, Great Artists Steal.", Pablo Picasso',
    '"Argue with idiots, and you become an idiot.", Paul Graham',
    '"Be yourself; everyone else is already taken.", Oscar Wilde',
    '"Simplicity is the ultimate sophistication.", Leonardo Da Vinci',
    
];
//create the function to display it
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML =randomQuote;
})