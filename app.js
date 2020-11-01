let btn = document.getElementById('btn');
let output = document.getElementById('outputQuote');

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
    '"Do, or Do Not.  There is no try.", Yoda',
    '"The Force will be with you. Always.", Obi-Wan Kenobi',
    '"Why, you stuc-up, half-witted, scruffy-looking nerf herder!", Leia Organa',
    '"Never tell me the odds!", Han Solo',
    '"So this is how liberty dies.  With thunderous applause.", Padme Amidala',
    '"You know, no matter how much we fought, I have always haed watching you leave.", Leia Organa',
    '"The way I see it, if you want the rainbow, you gotta put up with the rain.", Dolly Parton',
    '"Do not judge me by my success, judge me by how many times I fell down and got back up again.", Nelson Mandela',
    '"There is no time for ease and comfort.  It is time to date and endure.", Winston Churchill',
    '"We are only as strong as we are united, as weak as we are divided.", J.K. Rowling',
    '"When you have exhausted all possibilities, remember this: you have not", A. Edison',
    '"You have power over your mind - not outside events.  Realize this, and you will find strength.", Marcus Aurelius',
    '"There are dark shaows on the earth, but its lights and stronger in the contrast.", Charles Dickens',
    '"Double, double toil and trouble; Fire burn and caldron bubble.", From Shakespeares Macbeth',
    '"I would like, if I may, to take you on a strange journey.", The criminologish, The Rocky Horror Picture Show 1975',
    '"I have seen enough horror movies to know that any weirdo wearing a mask is never friendly.", Elizabeht, Friday the 13th Part VI: Jason Lives 1986',
    '"You do not inspire your teammates by showing them how amazing you are. You inspire them by showing them how amazing they are.", Robyn Benincasa',


];
//create the function to display it
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML =randomQuote;
    console.log(randomQuote);
})


//let file = document.querySelector("#file-input").files[0]; 
// new FileReader object let reader = new FileReader(); 
// event fired when file reading finished reader.addEventListener('load', function(e) { 
// contents of the file let text = e.target.result; document.querySelector("#file-contents").textContent = text; }); 
// event fired when file reading failed reader.addEventListener('error', function() { alert('Error : Failed to read file'); }); 
// read file as text file reader.readAsText(file);
//https://www.npmjs.com/package/filereader
//https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array