// More info about enabling, testing, and submitting mods: https://R74ncom.github.io/InfiniteChef-Mods/

addIngredient("tortilla_chip",{
    color:"#f2e06e",
    type:"potato_chip",
    brokenShape:"dots_some_flat",
    shape:"triangle_round_ml",
    reactions: {
        cheese_powder: { set1:"dorito" }
    }
});

addIngredient("dorito",{
    color:"#fa8513",
    type:"potato_chip",
    shape:"triangle_round_ml",
    brokenShape:"dots_some_flat",
    hidden:true
});

addIngredient("chicken_nugget",{
    color:"#eb9628",
    type:"potato_chip",
    shape:"triangle_curved"
});

addIngredient("oreo",{
    color:"#272425",
    type:"cookie",
    brokenShape:"squares_some",
    shape:"disc"
});

addIngredient("mint_chocolate",{
    color:"#65dcb4",
    innerColor:"#6effac",
    type:"chocolate",
    brokenShape:"dots_some_flat",
    shape:"rectangle"
});


// All Shape IDs can be found here: https://R74n.com/shapes/
// A list of properties can be found at the top of: https://R74n.com/cook/foodData.js
addIngredient("finished_apple",{ //ID should be lowercase with underscores
    color:"#ff1f40", //red
    innerColor:"#ffeda4", //beige
    type:"apple", ///type can be any other ingredient
    shape:"fruit_bipod_stem"
});

// Add ingredient with reactions
addIngredient("water",{
    type:"liquid",
    color:"#bfd8df",
    reactions: {
        meat: { set1:"broth" },
        vegetable: { set1:"broth", tempMin:60 }
    }
});

// Change attributes of existing ingredients
editIngredient("apple",{
    color:"#06b000" //green
});

// Add a simple recipe
addRecipe("batter+sugar","cake");

// Add a recipe only in Stack Mode
addRecipe("&stack:batter+sugar","pancake");

// Add a recipe that can't have any other ingredients
addRecipe("=bread+bread","nothing sandwich");

// Add a recipe with an optional ingredient
addRecipe("cake+sprinkles?+chocolate","chocolate cake");

// Add a simple tool to interact with ingredients
addTool("red_dyer", {
    func: function(placed) { placed.h = 0; },
    shape:"liquid"
})

// Add a tool with more properties
addTool("red_dyer", {
    func: function(placed) { placed.h = 0; },
    onSelect: function() { alert("Use on an ingredient to dye it red!"); },
    whileOn: function() { console.log("Dyer selected."); },
    onDeselect: function() { alert("Goodbye!"); },
    onClick: function(x,y) { console.log(x,y) },
    shape:"liquid",
    spin: true
})
