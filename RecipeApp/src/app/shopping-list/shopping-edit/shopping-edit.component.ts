import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  editMode: boolean;
  editSubscription: Subscription;
  editItemIndex: number;
  constructor(public shoppingListService: ShoppingListService) { 
    this.editMode = false;
  }
  ngOnInit() {
    this.editSubscription = this.shoppingListService.editIngredient.subscribe((index: number)=>{
      const ingredient: Ingredient = this.shoppingListService.getIngredient(index);
      this.editItemIndex = index;
      this.form.setValue({
        'itemName' : ingredient.name,
        'amount' : ingredient.amount
      });
      this.editMode = true;
    });
  }
  addNewShoppingItem : (form: NgForm) => void = function(form: NgForm){
    const value = form.value;
    const newIngredient: Ingredient = new Ingredient(value.itemName, value.amount);
    if(!this.editMode)
      this.shoppingListService.addNewIngredient(newIngredient);
    else{
      this.shoppingListService.getAllIngredients()[this.editItemIndex] = newIngredient;
    }
    this.editMode = false;
    form.resetForm();
  }
  onClear(form: NgForm):void{
    form.resetForm();
    this.editMode = false;
  }
  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }
}
