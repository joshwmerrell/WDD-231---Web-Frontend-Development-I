/* 

    Main JavaScript file for the Yellowstone Field Notes website.

    Steps:
    1. Fetch the hike data from the JSON file.
    2. Organize hike data into a list of objects.
    3. Based on the user's selection of difficulty, filter the hikes accordingly and build them into hike cards.
    4. Display the filtered hikes to the user.

*/



// Get the hike data from the JSON file
const hikesData = await (await fetch('data/hikes.json')).json();


// Select and empty the hike list container
const domHikeList = document.querySelector('#hike-list');
domHikeList.innerHTML = '';


// Create an array of hike objects based on the raw hike data
function buildHikeObject(hike) {
    return {
        id: hike.id,
        area: hike.area,
        name: hike.name,
        description: hike.description,
        distanceMiles: hike.distanceMiles,
        elevationGainFeet: hike.elevationGainFeet,
        difficulty: hike.difficulty
    };
}
const hikes = await Promise.all(hikesData.map(buildHikeObject));


// When the user selects a difficulty, filter the hikes and display them

function displayHikeAmount(hikesList) {
    const count = hikesList.length;
    const hikeAmountElement = document.querySelector('p.results-count');
    hikeAmountElement.textContent = `${count} hikes`;
}

function buildHike(hike, hikeIndex) {
    return `
        <article id="${hike.id}" class="hike-card">
            <span class="hike-index" aria-hidden="true">${hikeIndex.toString().padStart(2, '0')}</span>
            <div>
                <p class="hike-area">${hike.area}</p>
                <h3>${hike.name}</h3>
                <p class="hike-description">
                    ${hike.description}
                </p>
            </div>
            <div class="hike-facts" aria-label="Trail details">
                <span>Distance <strong>${hike.distanceMiles} mi</strong></span>
                <span>Gain <strong>${hike.elevationGainFeet} ft</strong></span>
                <span class="difficulty">${hike.difficulty}</span>
            </div>
        </article>`;
}

function displayAllHikes() {
    displayHikeAmount(hikes);
    domHikeList.innerHTML = hikes.map(hike => {
        const hikeIndex = hikes.indexOf(hike) + 1;
        return buildHike(hike, hikeIndex);
    }).join('');
}

function displayHikesByDifficulty(difficulty) {
    const filteredHikes = hikes.filter(hike => hike.difficulty === difficulty);
    displayHikeAmount(filteredHikes);
    domHikeList.innerHTML = filteredHikes.map(hike => {
        const hikeIndex = filteredHikes.indexOf(hike) + 1;
        return buildHike(hike, hikeIndex);
    }).join('');
}

const difficultySelect = document.querySelector('#difficulty-filter');
function displayHikes(event) {
    if (event.target.value === 'all') {
        displayAllHikes();
    } else {
        displayHikesByDifficulty(event.target.value);
    }
}
difficultySelect.addEventListener('change', (event) => {
    displayHikes(event);
});

// Initial display of hikes based on the default selected difficulty
displayHikes({ target: difficultySelect });