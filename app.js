let btn = document.getElementById('btn');
let output = document.getElementById('output');

//array of quote
let quotes = [
    '"Stay Hungry. Stay Foolish.", Steve Jobs',
    '"Good Artists Copy, Great Artists Steal.", Pablo Picasso',
    '"Argue with idiots, and you become an idiot.", Paul Graham',
    '"Be yourself; everyone else is already taken.", Oscar Wilde',
    '"Simplicity is the ultimate sophistication.", Leonardo Da Vinci',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall.",Nelson Mandela',
    '"The way to get started is to quit qualking and begin doing.", Walt Disney',
    '"If life were predictable it would cease to be life, and be without flavor", Eleanor Roosevelt',
    '"When you reach the end of your rope, tie a knot in it and hang on.", Franklin D. Roosevelt',
    '"Whoever is happy will make others happy too.",Anne Frank',
    
];
//create the function to display it
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML =randomQuote;
})