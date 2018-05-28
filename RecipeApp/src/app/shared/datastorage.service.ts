import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
@Injectable()
export class DataStorageService{
    constructor(private recipeService: RecipeService, private http: Http,
                private authService: AuthService){}
    storeRecipeData(){
        const token: string = this.authService.getToken();
       return  this.http.put("https://ng-recipebook-50d61.firebaseio.com/recipes.json?auth="+token, this.recipeService.getRecipes());
    }
    fetchRecipeData(){
        const token: string = this.authService.getToken();
        return this.http.get("https://ng-recipebook-50d61.firebaseio.com/recipes.json?auth="+token).map((response) => {
           let recipes: Recipe[] = response.json();
           recipes.forEach((recipe: Recipe) => {
               if(!recipe['ingredients']){
                   recipe['ingredients'] = [];
               }
           });
           return recipes;
        });
    }
}