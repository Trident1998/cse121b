/* W05: Programming Tasks */



/* Declare and initialize global variables */

const teplesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(element => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        h3.textContent = element.templeName;
        img.src = element.imageUrl;
        img.alt = element.location;

        article.appendChild(h3);
        article.appendChild(img);

        teplesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        templeList = await response.json();
        console.log("temple: ", templeList);
        displayTemples(templeList);
    }
}

/* reset Function */

const reset = () => {
    const articles = templesElement.querySelectorAll('article');
        articles.forEach(article => article.remove());
}

/* sortBy Function */

const sortBy = function(temples) {
    reset()
    const filter = document.getElementById('sortBy').value;
    const filteredList = [];
    switch(filter) {
        case 'utah':
            filteredList = templeList.filter(it => it.location.includes('Utah'));
            displayTemples(filteredList);
            break;
        case 'nonutah':
            filteredList = templeList.filter(it => !it.location.includes('Utah'));
            displayTemples(filteredList);            
            break;
        case 'older':
            filteredList = templeList.filter(it => it.dedicated > new Date(1950, 0, 1));
            displayTemples(filteredList);            
            break;
        case 'all':
            displayTemples(filteredList);
    }
};

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

