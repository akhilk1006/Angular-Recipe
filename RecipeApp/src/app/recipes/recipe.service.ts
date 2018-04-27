import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Array<Recipe> = [
        new Recipe("A test Recipe", "A simple Test", 
        "https://source.unsplash.com/XhS0YkpQI2M"),
        new Recipe("Quesadilla", "Mexican Food", 
        "https://source.unsplash.com/XhS0YkpQI2M")
      ];
    getRecipes(){
        return this.recipes.slice();
    }
}