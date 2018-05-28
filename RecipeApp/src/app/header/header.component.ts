import { Component, OnInit, Output, EventEmitter, Renderer, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/datastorage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService, private authService: AuthService) { }
  ngOnInit() {
  }
  saveData(){
    this.dataStorageService.storeRecipeData().subscribe(
      (response: Response)=>console.log(response.json()),
      (error: Error)=>console.log(error)
    );
  }
  fetchData(){
    this.dataStorageService.fetchRecipeData().subscribe((response: Array<Recipe>) => {
    this.recipeService.setRecipes(response);
    });
  }
}
