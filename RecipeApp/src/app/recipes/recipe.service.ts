import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class RecipeService {
    private recipes: Array<Recipe> = [
        new Recipe("Udon Salad", "A light meal - just awesome", 
        "https://source.unsplash.com/9aUU5PGZfxY",[
        new Ingredient("Lettuce", 1), new Ingredient("Croutons", 1), 
        new Ingredient("PepperJack Cheese", 2)
        ]),
        new Recipe("Big Fat Burger", "What else you need to say?", 
        "https://source.unsplash.com/OvNsLemoVEw", [
         new Ingredient("Meat", 1), new Ingredient("Chipotle Sauce", 1),
         new Ingredient("Cucumber", 2), new Ingredient("Tomato", 1)  
        ]),
        new Recipe("Spaghetti!!!","Very tasteful",
        "http://cdn23.beszamel.smcloud.net/t/thumbs/660/441/1/user_photos/shutterstock_451793926.jpg", [
        new Ingredient("Spaghetti", 10), new Ingredient("Tomatoes", 2)
        ])
    ];
    public recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number): Recipe{
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
    setRecipes(recipes: Array<Recipe>){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}