const songs = [
    "Albania - Zjerm",
    "Armenia - Survivor",
    "Australia - Milkshake Man",
    "Austria - Wasted Love",
    "Azerbaijan - Run with U",
    "Belgium - Strobe Lights",
    "Croatia - Poison Cake",
    "Cyprus - Shh",
    "Czechia - Kiss Kiss Goodbye",
    "Denmark - Hallucination",
    "Estonia - Espresso Macchiato",
    "Finland - Ich Komme",
    "France - Maman",
    "Georgia - Freedom",
    "Germany - Baller",
    "Greece - Asteromata",
    "Iceland - Roa",
    "Ireland - Laika Party",
    "Israel - New Day Will Rise",
    "Italy - Volevo essere un duro",
    "Latvia - Bur man laimi",
    "Lithuania - Tavo akys",
    "Luxembourg - La poupee monte le son",
    "Malta - Serving (Kant)",
    "Montenegro - Dobrodosli",
    "Netherlands - C'est la vie",
    "Norway - Lighter",
    "Poland - GAJA",
    "Portugal - Deslocado",
    "San Marino - Tutta l'Italia",
    "Serbia - Mila",
    "Slovenia - How Much Time Do We Have Left",
    "Spain - Esa diva",
    "Sweden - Bara bada bastu",
    "Switzerland - Voyage",
    "Ukraine - Bird of Pray",
    "United Kingdom - What the Hell Just Happened"
];

let currentIndex = 0;
const selectedSongs = [];

function loadNextPair() {
    if (currentIndex < songs.length - 1) {
        const song1 = songs[currentIndex];
        const song2 = songs[currentIndex + 1];
        const songContainer = document.getElementById("song-container");

        songContainer.innerHTML = `
            <p>Which song do you prefer?</p>
            <button onclick="selectSong('${song1}')">${song1}</button>
            <button onclick="selectSong('${song2}')">${song2}</button>
        `;
        currentIndex++;
    } else {
        displayResults();
    }
}

function selectSong(song) {
    selectedSongs.push(song);
    loadNextPair();
}

function displayResults() {
    const rankedList = document.getElementById("ranked-list");
    selectedSongs.forEach(song => {
        const listItem = document.createElement("li");
        listItem.textContent = song;
        rankedList.appendChild(listItem);
    });
}

loadNextPair();
