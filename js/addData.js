

    const recipeRef = db.collection("Recipes");

    recipeRef.doc("Avocado Toast").set({
      description: "Avocado toast has become one of my favorite morning breakfasts. It is such a simple, healthy and delicious food all at the same time! One of the best things about this breakfast, is it is small enough to be a snack and you can easily make it in under 10 minutes. This recipe is a basic one, but the possibilities are endless. Feel free to replace the egg with tomatoes, bacon, spinach, salmon, or anything else you would enjoy. ",
      duration: 10,
      ingredients: ["2 slices of bread ", "1 avocado",
      "Salt and Pepper", "2 eggs", "Butter"],
      name: "Avocado Toast",
      type: 0,
      preparation:["1) Toast your bread in the toaster",
      "2) Cut the avocados in half and scoop the insides out into a medium-sized bowl. Mash it up with a fork until it is smooth and creamy. Add a pinch of salt and pepper to taste.",
      "3) Spread the avocado evenly across the toast, top with salt and pepper.",
      "4) In a small pan, melt 1 tablespoon of butter on medium-high heat and brush around the pan. When the butter starts foaming, add the egg and cook for about 1-2 minutes and flip. Cook an additional minute and then place the egg on the toast. Repeat as necessary."
    ]
    });


    recipeRef.doc("Slow-cooked Scrambled Eggs").set({
      description: "Have you ever had silky-smooth scrambled eggs? If not, this recipe is a must-try for you! With this method, you cook the eggs over a very low heat, stirring frequently to break up the curds so that the eggs never fully set. These eggs should be a breakfast food, but they are so delicious that you’ll want to eat them all the time!",
      duration: 35,
      ingredients: ["5 eggs", "Salt and pepper",
      "2 tbsp heavy cream (Optional)"],
      name: "Slow-cooked Scrambled Eggs",
      type: 0,
      preparation:["1) Crack the eggs into a bowl and beat them just until yolks and whites are combined, season with salt and pepper.",
      "(Optional: Stir in the heavy cream)",
      "2) Heat a medium non-stick skillet over medium heat for about a minute. Add the butter and swirl it around the pan, evenly coating the sides. When the butter melts just before it starts to foam, turn heat down to low.",
      "3) Add eggs to skillet and cook over low heat, stirring with a spatula in a circular motion. (TIP: If you have a heat-proof silicon spatula, it would work perfectly to gently scrape the side of the pan and break apart the eggs) After about 10 minutes, the eggs will begin to form curds. Keep stirring and breaking up the curds until the mixture is a mass of soft curds, about 10 – 15 minutes more depending on your stovetop.",
      "4) Immediately transfer to a plate and season with salt and pepper to taste."
      ]
    });

    recipeRef.doc("Breakfast Scramble Casserole").set({
      description: "This breakfast casserole is tasty and filling, and it is also very easy to make! This casserole has become a favorite in my family and we always look forward to eating it on special occasions such as Birthdays and Christmas!",
      duration: 60,
      ingredients: ["9x13-inch glass baking dish",
      "1 (16 ounce) package pork sausage",
      "1 (16 ounce) can Pillsbury Grands buttermilk biscuit dough",
      "3 cups frozen hash brown potatoes, thawed",
      "¼ cup milk",
      "1 ½ cups shredded Mexican cheese blend",
      "5 eggs"
    ],
      name: "Breakfast Scramble Casserole",
      type: 0,
      preparation:["1) Preheat oven to 350 degrees F, grease 9x13-inch baking dish.",
      "2) Heat a large skillet over medium-high heat and stir in the sausage, crumbling it evenly. Cook until browned and no longer pink, about 5 minutes. Drain and discard any grease. (TIP: For this part, I like to keep a mason jar under my sink that I store the grease in so that it doesn’t get poured down the drain). Stir in hash brown potatoes, cooking and stirring until the potatoes are browned, about 5 more minutes.",
      "3) Line the bottom of the baking dish with a layer of the buttermilk biscuits, splitting the biscuits in half so the bottom of the dish is completely covered. Spread the sausage and hash brown mixture evenly over the biscuits and sprinkle the cheese on top.",
      "4) Whisk together the eggs and milk in a bowl and pour evenly over the cheese.",
      "5) Bake in the preheated oven until the eggs set, about 30-35 minutes."
    ]
    });

    recipeRef.doc("Classic Grilled Cheeseburger").set({
      description: "An easy, flavorful burger that even picky eaters will love. Whenever I am unsure of what to make for lunch, I know I can never go wrong with a classic cheeseburger. This burger can be enjoyed plain, or you may add ketchup, mustard, mayonnaise, onion, lettuce, tomatoes, pickles and many more for a more flavorful experience.",
      duration: 20,
      ingredients: ["1-pound (80/20) ground beef chuck",
      "½ tablespoon onion powder",
      "Salt and pepper",
      "6 slices American cheese",
      "3 buns"
    ],
      name: "Classic Grilled Cheeseburger",
      type: 5,
      preparation:["1) Preheat the grill to high heat.",
    "2) In a medium bowl, mix ground beef, onion powder, salt and pepper until just combined. (TIP: Be careful not to overmix the meat or the patties will be tough)",
    "3) Divide the beef into 3 even portions and press to form even patties. Smooth the cracks in the patties out. (TIP: Leave the meat in the fridge until you are ready to season and form the patties)",
    "4) Add patties to the grill and close lid. Cook about 2-3 minutes depending on thickness and flip when the patty begins to lift up easily. Add 2 slices of cheese to each patty and close the lid, cooking another 2-3 minutes for medium to medium-rare burgers. To make sure, check the internal temp with an instant-read thermometer. (See ‘Food Safety’ course to learn more about internal temperatures.)",
    "5) Move burgers to a plate and let sit for 3-5 minutes before transferring to the buns.",
    "6) Garnish with veggies and condiments as you like, serve immediately."
    ]
    });

    recipeRef.doc("Perfectly Grilled Ribeye").set({
      description: "So you want to grill a steak, but you don’t want to mess it up. Here is a recipe that, combined with the knowledge given to you in the ‘Grilling’ course, will allow you to cook the best steak you’ve ever had with ease.",
      duration: 40,
      ingredients: ["2 Ribeye steaks, 1-1.5 inches thick",
      "Olive oil",
      "Salt and pepper",
      "2 tablespoons butter"
    ],
      name: "Perfectly Grilled Ribeye",
      type: 5,
      preparation:["1) Remove steaks from refrigerator and any packaging. Place on a foil-lined baking sheet and rub each side of the steak with olive oil.",
    "2) In a small bowl, combine salt and pepper, rub each side of steaks with rub mixture. Set steaks on baking sheet to rest at room temperature for at least 30 minutes before cooking. This helps to promote a more even cooking.",
    "3) Preheat the grill to high heat (around 500 degrees). Once heated, Place steaks on the grill diagonally to the grates on the grill (/), and discard foil from baking sheet. Close the lid and cook 1-2 minutes. After 2 minutes, rotate the steaks to the opposite diagonal (\). Close lid and cook another 2 minutes. (2 minutes for medium-rare. If you want your steaks medium, cook closer to 3 minutes per side).",
    "4) Flip steaks and repeat step 3 for the opposite side, cooking about 2 minutes before you rotate. This creates the nice hatch marks on the steak. If you don’t care about this, cook each side 4-5 minutes and flip. Check the internal temp with a instant-read thermometer, the ideal temperature is 130F for medium-rare.",
    "5) Remove the steaks from the grill and return to baking sheet and immediately top each steak with 1 tablespoon butter. Tent steaks with foil and let rest for 5-10 minutes before cutting. This allows the juices to redistribute throughout the food for a more flavorful meal."
    ]
    });

    recipeRef.doc("Gourmet Ham and Cheese Sandwiches").set({
      description: "A gourmet twist on one of your favorite childhood lunches, these ham and cheese sandwiches will surely make your mouth water. Pair with a hot bowl of tomato soup for the ultimate classic meal.",
      duration: 10,
      ingredients: ["2 Slices of bread (your choice) ",
      "2 tablespoons of butter, softened",
      "2-3 slices Swiss cheeser",
      "2-3 slices deli ham",
      "1 teaspoon mayonnaise",
      "1 teaspoon mustard",
      "2 tablespoons grated Parmesan cheese"
    ],
      name: "Gourmet Ham and Cheese Sandwiches",
      type: 5,
      preparation:["1) Heat a skillet over medium-high heat.",
    "2) Butter the outsides of each slice of bread and sprinkle each side with the Parmesan cheese, pressing it to help it stick.",
    "3) Place the slices of bread, butter side down, on a workspace such as a plate or cutting board. Top with ham and cheese slices, then the mayonnaise and mustard, followed by the last slice of bread, butter/cheese side up.",
    "4) Transfer sandwich to the skillet, cook 2-3 minutes and then flip, cooking until outside is crisp and inside is melted, about 1-2 minutes more. Cut in half and serve immediately."
    ]
    });

    recipeRef.doc("Poppyseed Chicken").set({
      description: "A super simple and affordable way to feed a large group of people. This delicious casserole-type dish also freezes well for those busy nights where you don’t always have time to cook something.",
      duration: 50,
      ingredients: ["5 cups chicken breast, cooked and shredded",
      "1 cup sour cream",
      "2 (10.75-ounce) cans of condensed cream of chicken soup",
      "2 cups crushed Ritz crackers (about 1 ½ rolls) ",
      "1/2 cup butter, melted",
      "1 tablespoon poppy seeds",
      "2 cups cooked rice"
    ],
      name: "Poppyseed Chicken",
      type: 2,
      preparation:["1) Preheat oven to 350 degrees",
    "2) Layer a 9x13 glass baking dish with the cooked rice, followed by the shredded chicken. (If freezing, cover and place in freezer up to 3 months. Place crushed crackers and butter in a separate baggie.)",
    "3) In a medium bowl, stir together condensed soup and sour cream and pour over the chicken.",
    "4) In a separate bowl, stir together crushed crackers and melted butter, pour over the chicken and sauce. Sprinkle poppy seeds on top.",
    "5) Bake in the preheated oven 25-30 minutes until the top of the casserole is browned and the sauce is bubble."
    ]
    });

function setRecipe(){

  //remove .value if i decide to use a dropdown/button for type/duration/etc.
  //1. look at how to input and read ingredient values as an array
  var recipe_description = document.getElementById('recipe_description').value;
  var recipe_duration = document.getElementById('recipe_duration').value;
  var recipe_ingredients = document.getElementById('recipe_ingredients').value;
  var recipe_name = document.getElementById('recipe_name').value;
  var recipe_type = document.getElementById('recipe_type').value;
  var recipe_prep = document.getElementById('recipe_prep').value;

  recipeRef.doc().set({
    description: recipe_description,
    duration: recipe_duration,
    ingredients: //1
    ["5 cups chicken breast, cooked and shredded",
    "1 cup sour cream",
    "2 (10.75-ounce) cans of condensed cream of chicken soup",
    "2 cups crushed Ritz crackers (about 1 ½ rolls) ",
    "1/2 cup butter, melted",
    "1 tablespoon poppy seeds",
    "2 cups cooked rice"
  ],
    name: recipe_name,
    type: recipe_type,
    preparation:["1) Preheat oven to 350 degrees",
  "2) Layer a 9x13 glass baking dish with the cooked rice, followed by the shredded chicken. (If freezing, cover and place in freezer up to 3 months. Place crushed crackers and butter in a separate baggie.)",
  "3) In a medium bowl, stir together condensed soup and sour cream and pour over the chicken.",
  "4) In a separate bowl, stir together crushed crackers and melted butter, pour over the chicken and sauce. Sprinkle poppy seeds on top.",
  "5) Bake in the preheated oven 25-30 minutes until the top of the casserole is browned and the sauce is bubble."
  ]
  });

}
