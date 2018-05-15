import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode: boolean = false;
  id: number;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }
  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngredients: FormArray = new FormArray([]);

    if(this.editMode){
      const recipe: Recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      
      for(let ingredient of recipe.ingredients){
        recipeIngredients.push(new FormGroup({
          'name': new FormControl(ingredient.name),
          'amount': new FormControl(ingredient.amount)
        }));
      }
    }

    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName),
      'recipeImagePath': new FormControl(recipeImagePath),
      'recipeDescription': new FormControl(recipeDescription),
      'recipeIngredients': recipeIngredients
    });
  }
}
