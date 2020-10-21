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
    '"I planned out our whole day.  First, we will make snow angels for two hours.  Then we will go ice skating.  then we will eat a whole roll of cookie dough, and then we will snuggle.", ELF',
    '"There is a certain magic that comes with the very fist snow. For when the first snow is also a Christmas snow, well, Something wonderful is bound to happen.", Frost the Snowman',
    '"I will honor Christmas in my heart and try to keep it all the year.", A Christmas Carol',
    '"The world is what you make it.  And it all starts with what you make of yourself." Fred Claus',
    '"Just remember the true spirit of Christmas lies in your heart.", The Polar Express',
    
];
//create the function to display it
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML =randomQuote;
})