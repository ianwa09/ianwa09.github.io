 // document.addEventListener('DOMContentLoaded', function () {
 //    console.log("Script is running!");
    
 //    const quotes = [
 //        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
 //        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
 //        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
 //        { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
 //        { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde"},
 //        { text: "It is better to be hated for what you are than to be loved for what you are not.", author: "Andre Gide"},
 //        { text: "If you take a life, do you know what you'll give?", author: "Chris Cornell, You Know My Name"},
 //        { text: "It is our choices, Harry, that show what we truly are, far more than our abilities.", author: "Dumbledore"},
 //        { text: "It does not do to dwell on dreams and forget to live.", author: "Dumbledore"},
 //        { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain"},
 //        { text: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare"},
 //        { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw"},
 //        { text: "Today you are You, that is truer than true. There is no one alive who is Youer than You.", author: "Dr. Seuss"},
 //        { text: "Folks are usually about as happy as they make their minds up to be.", author: "Abraham Lincoln"},
 //        { text: "Some day you will be old enough to start reading fairy tales again.", author: "C.S. Lewis"},
 //        { text: "Anyone who has never made a mistake has never tried anything new.", author: "Albert Einstein"},
 //        { text: "The truth is rarely pure and never simple.", author: "Oscar Wilde"},
 //        { text: "A lie can travel half way around the world while the truth is putting on its shoes.", author: "Mark Twain"},
 //        { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle"},
 //        { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates"},
 //        { text: "Happiness in intelligent people is the rarest thing I know.", author: "Ernest Hemingway, The Garden of Eden"},
 //        { text: "A person's a person, no matter how small.", author: "Dr. Seuss, Horton Hears a Who!"},
 //        { text: "You can never be overdressed or overeducated.", author: "Oscar Wilde"},
 //        { text: "I became insane, with long intervals of horrible sanity.", author: "Edgar Allan Poe"},
 //        { text: "Only hope can keep me together; Love can mend your life or love can break your heart", author: "The Police, Message In A Bottle"},
 //        { text: "One is loved because one is loved. No reason is needed for loving.", author: "Paulo Coelho, The Alchemist"},
 //        { text: "If you don't know where you're going, any road'll take you there", author: "George Harrison"},
 //        { text: "We love the things we love for what they are.", author: "Robert Frost"},
 //        { text: "Never memorize something that you can look up.", author: "Albert Einstein"},
 //        { text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon"},
 //        { text: "I would always rather be happy than dignified.", author: "Charlotte Brontë, Jane Eyre"},
 //        { text: "Facts do not cease to exist because they are ignored.", author: "Aldous Huxley, Complete Essays, Vol. II: 1926-1929"},
 //        { text: "And those who were seen dancing were thought to be insane by those who could not hear the music.", author: "Friedrich Nietzsche"}    
    



 //        // Add more quotes with their respective authors
 //    ];

 //    const quoteElement = document.getElementById('quote-text');
 //    const authorElement = document.getElementById('author-text');

 //    // Function to get a random quote
 //    function getRandomQuote() {
 //        const randomIndex = Math.floor(Math.random() * quotes.length);
 //        return quotes[randomIndex];
 //    }

 //    // Display a random quote and author on page load
 //    const randomQuote = getRandomQuote();
 //    quoteElement.textContent = randomQuote.text;
 //    authorElement.textContent = `- ${randomQuote.author}`;
    
 //    function toggleMenu() {
 //        const menu = document.querySelector('.menu');
 //        const menuText = document.querySelector('.menu-text');
 //        const menuBars = document.querySelectorAll('.menu-opener .bar');

 //        menu.classList.toggle('menu-active');

 //        if (menu.classList.contains('menu-active')) {
 //            menuText.style.marginRight = '200px'; // Adjust the value based on your menu width
 //            menuBars.forEach(bar => bar.style.marginRight = '200px');
 //        } else {
 //            menuText.style.marginRight = '0';
 //            menuBars.forEach(bar => bar.style.marginRight = '0');
 //        }
 //    }

 //    const menuOpener = document.querySelector('.menu-opener');
 //    menuOpener.addEventListener('click', toggleMenu);

 // });
