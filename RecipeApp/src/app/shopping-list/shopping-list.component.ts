import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  constructor(public shoppingListService: ShoppingListService) { }
  ngOnInit() {
  }
  getAllIngredients(): Array<Ingredient>{
    return this.shoppingListService.getAllIngredients();
  }
  editIngredient(index: number){
    this.shoppingListService.editIngredient.next(index);
  }
}
