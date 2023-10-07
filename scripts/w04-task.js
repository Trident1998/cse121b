/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Dmutro Ivanytskyi',
    photo: 'images/selfie.jpg',
    favoriteFoods: ["Apple", "Banana", "Creatine", "Protein"],
    hobbies: ['Workouting', 'Snowboarding', 'Church', 'Piano'],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Hlukhiv, Summy region, UA',
        length: '19 years'
    },
    {
        place: 'Kharkiv, UA',
        length: '6 years'
    },
    {
        place: 'Kyiv, UA',
        length: '2 years'
    }
)

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let liElement = document.createElement('li');
    liElement.textContent = food

    document.querySelector('#favorite-foods').appendChild(liElement);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let liElement = document.createElement('li');
    liElement.textContent = hobby

    document.querySelector('#hobbies').appendChild(liElement);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let dtElement = document.createElement('dt');
    let ddElement = document.createElement('dd');

    dtElement.textContent = placeLived.place;
    ddElement.textContent = placeLived.length;


    document.querySelector('#places-lived').append(dtElement);
    document.querySelector('#places-lived').append(ddElement);
})
