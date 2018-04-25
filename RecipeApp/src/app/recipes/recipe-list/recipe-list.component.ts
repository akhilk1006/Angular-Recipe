import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe("A test Recipe", "A simple Test", 
    "https://source.unsplash.com/XhS0YkpQI2M"),
    new Recipe("A test Recipe", "A simple Test", 
    "https://source.unsplash.com/XhS0YkpQI2M")
  ];
  constructor() { }

  ngOnInit() {
  }

}
