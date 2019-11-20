//creating an array of recipes.

let foodRecipe = [
    {
        name: "Jollof rice",
        serving: "3 people",
        ingredient: [
            { name: "Rice", image: "rice.jpg" },
            { name: "Tomatoes", image: "tomatoes.jpeg" },
            { name: "Pepper", image: "pepper.jpg" },
            { name: "Seasonings", image: "Seasoning.jpg" }
        ]
    },
    {
        name: "Doner",
        serving: " 4 people",
        ingredient: [
            { name: "Meat", image: "meat.jpeg" },
            { name: "Bread", image: "bread.jpg" },
            { name: "Vegetables", image: "vegetables.jpg" }
        ]
    },
    {
        name: "Potatoes Salad",
        serving: "3 people",
        ingredient: [
            { name: "Potatoes", image: "potatoes.jpg" },
            { name: "Vegetables", image: "vegetables.jpg" },
            { name: "Salad cream", image: "Salad_Cream.jpeg" }
        ]
    }
];

//creating an ordered list for displaying the recipes

let orderedRecipe = document.createElement("ol");
let recipeListDiv = document.getElementById("recipeList");
recipeListDiv.appendChild(orderedRecipe);

//looping through the arrays to get the values
for (let recipe of foodRecipe) {
    let list = document.createElement("li");
    orderedRecipe.appendChild(list);

    let recipeName = document.createElement("h4");
    recipeName.textContent = recipe.name;

    //change color when mouse hovers over the title
    recipeName.onmouseenter = function () {
        recipeName.style.color = "red";
        recipeName.style.fontSize = "larger";
    }
    recipeName.onmouseleave = function () {
        recipeName.style.color = "black";
        recipeName.style.fontSize = "initial";
    }
    list.appendChild(recipeName);

    //create hide button

    let recipeButton = document.createElement("button");
    recipeButton.textContent = "Hide";
    list.appendChild(recipeButton);

    let recipeServing = document.createElement("div");
    recipeServing.textContent = "Serving: " + recipe.serving;
    list.appendChild(recipeServing);


    let ingredientList = document.createElement("ul");
    list.appendChild(ingredientList);
    for (let ingredient of recipe.ingredient) {
        let recipeIngr = document.createElement("li");
        let recipeImage = document.createElement("div")
        recipeIngr.textContent = ingredient.name;
        recipeImage.innerHTML = '<img src="' + ingredient.image + '"' + "height='100'" + "width='200'" + '>';



        //making the image bigger when clicked on
        let isBigger = false;
        recipeImage.onclick = function () {
            if (isBigger) {
                recipeImage.innerHTML = '<img src="' + ingredient.image + '"' + "height='100'" + "width='200'" + '>';
                isBigger = false;
            } else {
                recipeImage.innerHTML = '<img src="' + ingredient.image + '"' + "height='250'" + "width='500'" + '>';
                isBigger = true;
            }
        }



        // Strike a line through one of the ingredients if the user clicks on it


        let isStriked = false;
        recipeIngr.onclick = function () {
            if (isStriked) {
                recipeIngr.style.textDecoration = "unset";

                isStriked = false;
            } else {
                recipeIngr.style.textDecoration = "line-through";
                recipeImage.innerHTML = '<img src="' + ingredient.image + '"' + "height='100'" + "width='200'" + '>';

                isStriked = true;
            }
        }
        ingredientList.appendChild(recipeIngr);
        ingredientList.appendChild(recipeImage);

        // hide and show the contents when the button is clicked
        let isVisible = true;
        recipeButton.onclick = function () {
            if (isVisible) {
                recipeServing.style.display = "none";
                ingredientList.style.display = "none";
                recipeButton.textContent = "show";
                isVisible = false;
            } else {
                recipeServing.style.display = "block";
                ingredientList.style.display = "block";
                recipeButton.textContent = "Hide";
                isVisible = true;
            }
        }
    }
};