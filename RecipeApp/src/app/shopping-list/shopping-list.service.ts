import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient('Tomatoes', 10)];
    editIngredient: Subject<number> = new Subject<number>();
    getAllIngredients():Array<Ingredient>{
        return this.ingredients;
    }
    getIngredient(index: number):Ingredient{
        return this.ingredients[index];
    }
    addNewIngredient: (ingredient: Ingredient)=>void = function(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }
    removeIngredientAtIndex: (index: number)=>void = function(index: number){
        this.ingredients.splice(index, 1);
    }
}