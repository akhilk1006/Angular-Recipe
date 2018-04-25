import { Component } from "@angular/core"
import { Recipe } from "./recipe.model"
@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html",
    styleUrls: ["./recipes.component.css"]
})

export class RecipesComponent{
    currentSelectedRecipe: Recipe;
    showRecipeDetails: (recipe: Recipe)=>void = function(recipe: Recipe){
        this.currentSelectedRecipe = recipe;
    }
}