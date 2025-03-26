const songs = [
    "Albania - Zjerm", "Armenia - Survivor", "Australia - Milkshake Man", "Austria - Wasted Love",
    "Azerbaijan - Run with U", "Belgium - Strobe Lights", "Croatia - Poison Cake", "Cyprus - Shh",
    "Czechia - Kiss Kiss Goodbye", "Denmark - Hallucination", "Estonia - Espresso Macchiato", "Finland - Ich Komme",
    "France - Maman", "Georgia - Freedom", "Germany - Baller", "Greece - Asteromata", "Iceland - Roa",
    "Ireland - Laika Party", "Israel - New Day Will Rise", "Italy - Volevo essere un duro", "Latvia - Bur man laimi",
    "Lithuania - Tavo akys", "Luxembourg - La poupee monte le son", "Malta - Serving (Kant)", "Montenegro - Dobrodosli",
    "Netherlands - C'est la vie", "Norway - Lighter", "Poland - GAJA", "Portugal - Deslocado", "San Marino - Tutta l'Italia",
    "Serbia - Mila", "Slovenia - How Much Time Do We Have Left", "Spain - Esa diva", "Sweden - Bara bada bastu",
    "Switzerland - Voyage", "Ukraine - Bird of Pray", "United Kingdom - What the Hell Just Happened"
];

// Shuffle songs array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Initial setup for song comparison
let songChoices = [];
let songScores = {};

songs.forEach(song => {
    songScores[song] = 0;  // Initialize each song's score to 0
});

// Shuffle the songs and pick the first pair
shuffleArray(songs);
let currentPair = songs.slice(0, 2);  // Get first two songs for comparison

function updateComparisonUI() {
    const comparisonContainer = document.getElementById('comparison-container');
    comparisonContainer.innerHTML = `
        <p><strong>Pick your favorite song:</strong></p>
        <button onclick="chooseSong('${currentPair[0]}')">${currentPair[0]}</button>
        <button onclick="chooseSong('${currentPair[1]}')">${currentPair[1]}</button>
    `;
}

function chooseSong(chosenSong) {
    // Increment the score for the chosen song
    songScores[chosenSong]++;

    // Remove the chosen song from the pair and shuffle the remaining
