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
    "She wasn’t his to own, but she was his to cherish."
];

const quoteButton = document.getElementById('quoteButton');
const quoteDisplay = document.getElementById('quoteDisplay');

quoteButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
});

// Snowflake generator
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄️'; // Snowflake emoji
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall speed
    snowflake.style.opacity = Math.random(); // Random opacity
    document.body.appendChild(snowflake);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Match the duration of the animation
}

// Create snowflakes every 300ms
setInterval(createSnowflake, 300);