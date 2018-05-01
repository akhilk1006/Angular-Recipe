import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[];
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeNew: () => void = function(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
