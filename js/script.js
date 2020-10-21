// Constants

const key = '960e3ce6d8bdea55fa59a664f86f60b5';
const id = 'c5d7ac65';
const url = 'https://api.edamam.com/search'

// Variables 

let recipeData, userInput, recipeDetail;


// Cached Element References
const $image = $('#image');
const $label = $('#label');
const $health = $('#health');
const $ingredients = $('#ingredients');
const $instructions = $('#instructions');
const $modal = $('#modal');

const $recipeEl = $('#recipes');
const $form = $('form');
const $main = $('main');
const $input = $('input[type="text"]');
const $top = $('#top');

const $h1 = $('h1');
const $search = $('input[type="submit"]');


// Event Listeners

$recipeEl.on('click', 'article', handleClick);

$form.on('submit', handleGetData);

// $top.on('click', render);

// $search.on('click', userInput)

// Functions

// init();

// function init() {
//     handleGetData();
// }

function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();

    if (!userInput) return;
$.ajax(url + '?q=' + userInput + '&app_id=' + id + '&app_key=' + key)
.then(function(data) {

recipeData = data;
render();
console.log(data)
}, 
function(error) {
    console.log(error);
});
};


function handleClick() {
const itemIndex = this.dataset.index;
render(itemIndex);
    // console.log(this);
};



function render(index) {
  
    const recipe = recipeData.hits[index];

    if(recipe, index) {
       
        $label.text(`${recipe.recipe.label}`);
        $health.text(`${recipe.recipe.dietLabels}`);
        $ingredients.text(`ingredients: ${recipe.recipe.ingredientLines}`);
        $instructions.attr({href: recipe.recipe.url
        }).text(`instructions`);
        
        $modal.modal(); 
        
        
    } else {
    $recipeEl.html(generateRecipes().slice(0, 9));
    }
};


    
function generateRecipes() {
    return recipeData.hits.map(function(food, index) {
            return `
            <article class="recipe outline flex-ctr" data-index="${index}">
                <img src="${food.recipe.image}" alt="${food.recipe.label}">
                <h3>${food.recipe.label}</h3>
                
            </article>
            `;
        });
};



// API Elements 
// hits: Array(10)
// 0:
// bookmarked: false
// bought: false
// recipe:
// calories: 4228.043058200812
// cautions: ["Sulfites"]
// dietLabels: ["Low-Carb"]
// digest: (26) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// healthLabels: (2) ["Peanut-Free", "Tree-Nut-Free"]
// image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
// ingredientLines: (10) ["1/2 cup olive oil", "5 cloves garlic, peeled", "2 large russet potatoes, peeled and cut into chunks", "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)", "3/4 cup white wine", "3/4 cup chicken stock", "3 tablespoons chopped parsley", "1 tablespoon dried oregano", "Salt and pepper", "1 cup frozen peas, thawed"]
// ingredients: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// label: "Chicken Vesuvio"
// shareAs: "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken"
// source: "Serious Eats"
// totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
// totalNutrients: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
// totalTime: 60
// totalWeight: 2976.8664549004047
// uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6"
// url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html"
// yield: 4
