// Constants

const key = '960e3ce6d8bdea55fa59a664f86f60b5';
const id = 'c5d7ac65';
const url = 'https://api.edamam.com/search'

// Variables 

let recipeData, userInput;


// Cached Element References

const $recipeEl = $('.recipe');

// Event Listeners

$recipeEl.on('click', function() {
    console.log(this);
});

// Functions

function handleGetData() {
$.ajax(url + '?q=chicken&app_id=' + id + '&app_key=' + key)
.then(data => console.log(data))
.then(error => console.log(error))
};





// API Elements 
/*
count: 120230
from: 0
hits: Array(10)
0:
bookmarked: false
bought: false
recipe:
calories: 4228.043058200812
cautions: ["Sulfites"]
dietLabels: ["Low-Carb"]
digest: (26) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
healthLabels: (2) ["Peanut-Free", "Tree-Nut-Free"]
image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
ingredientLines: (10) ["1/2 cup olive oil", "5 cloves garlic, peeled", "2 large russet potatoes, peeled and cut into chunks", "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)", "3/4 cup white wine", "3/4 cup chicken stock", "3 tablespoons chopped parsley", "1 tablespoon dried oregano", "Salt and pepper", "1 cup frozen peas, thawed"]
ingredients: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
label: "Chicken Vesuvio"
shareAs: "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken"
source: "Serious Eats"
totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
totalNutrients: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
totalTime: 60
totalWeight: 2976.8664549004047
uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6"
url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html"
yield: 4
__proto__: Object
*/