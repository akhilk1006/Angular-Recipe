import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
@Injectable()
export class DataStorageService{
    constructor(private recipeService: RecipeService, private httpClient: HttpClient,
                private authService: AuthService){}
    storeRecipeData(){
        const token: string = this.authService.getToken();
       return  this.httpClient.put("https://ng-recipebook-50d61.firebaseio.com/recipes.json",
                                    this.recipeService.getRecipes(),
                                    {params: new HttpParams().set("auth", token)}
                                );
    }
    fetchRecipeData(){
        const token: string = this.authService.getToken();
        return this.httpClient.get<Recipe[]>("https://ng-recipebook-50d61.firebaseio.com/recipes.json", {params: new HttpParams().set("auth", token)})
        .map((recipes) => {
           recipes.forEach((recipe: Recipe) => {
               if(!recipe['ingredients']){
                   recipe['ingredients'] = [];
               }
           });
           return recipes;
        });
    }
}