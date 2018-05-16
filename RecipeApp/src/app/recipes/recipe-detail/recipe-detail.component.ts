import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model"
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;
  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.recipeId = params['id'];
      this.recipe = this.recipeService.getRecipes()[this.recipeId];
    });
  }
  onEditRecipe: () => void = function(){
    this.router.navigate(["edit"], {relativeTo: this.route});
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);
  }
}
