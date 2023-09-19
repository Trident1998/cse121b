/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Dmytro Ivanytskiy";

let currentYear = 2023;

let profilePicture = 'images/selfie.jpg';

/* Step 3 - Element Variables */

const nameElement =  document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.getElementById('year');

const imageElement = document.querySelector('main picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

const favoriteFoods = ["Apple", "Banana", "Creatine", "Protein"];
foodElement.innerHTML = favoriteFoods;

let anotherFavoriteFood = 'Gainer';
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;


