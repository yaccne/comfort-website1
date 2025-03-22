const quotes = [
    "A Real thing doesn’t let go. It fights, it holds on, even when it’s hurting",
    "You deserve to be someone’s first choice.",
    "She wasn’t just fire; she was the whole damn inferno.",
    "Love isn’t about who you’ve known the longest. It’s about who makes you feel the most alive.",
    "Some people are meant to come into your life and make it better, even if it takes you a while to realize it",
    "I will wait for you. No matter how long it takes.",
    "You don’t settle for the easy choice. You fight for the one that makes your heart race.",
    "She wasn’t his weakness; she was the war he was willing to lose.",
    "I choose you, not because I need you, but because I want you.",
    "The right person won’t leave, no matter how hard things get.",
    "She wasn’t his to own, but she was his to cherish.",
    "I'll trade them all for a minute more."
];

const quoteButton = document.getElementById('quoteButton');
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteInput = document.getElementById('newQuoteInput');
const addQuoteButton = document.getElementById('addQuoteButton');
const deleteQuoteButton = document.getElementById('deleteQuoteButton');

// Display a random quote
quoteButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
});

// Add a new quote
addQuoteButton.addEventListener('click', () => {
    const newQuote = newQuoteInput.value.trim();
    if (newQuote) {
        quotes.push(newQuote);
        newQuoteInput.value = ''; // Clear the input field
        alert('Quote added successfully!');
    } else {
        alert('Please enter a valid quote.');
    }
});

// Delete the last quote
deleteQuoteButton.addEventListener('click', () => {
    if (quotes.length > 0) {
        quotes.pop(); // Remove the last quote
        alert('Last quote deleted successfully!');
    } else {
        alert('No quotes to delete.');
    }
});

// Snowflake animation (optional, if you want to keep it)
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄️';
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

    // Adjust snowflake color based on theme
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        snowflake.style.color = '#bdc3c7'; // Light gray for dark mode
    } else {
        snowflake.style.color = '#ffffff'; // White for light mode
    }

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 7000);
}

setInterval(createSnowflake, 300);
// Create snowflakes every 300ms
setInterval(createSnowflake, 300);

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️'; // Sun emoji for dark mode
        localStorage.setItem('theme', 'dark');
    }
});
