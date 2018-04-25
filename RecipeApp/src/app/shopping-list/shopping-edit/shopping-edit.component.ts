import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameElement: ElementRef;
  @ViewChild("amountInput") amountElement: ElementRef;
  @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addNewShoppingItem : () => void = function(){
    const newIngredient: Ingredient = new Ingredient(this.nameElement.nativeElement.value, this.amountElement.nativeElement.value);
    this.addIngredient.emit(newIngredient);
  }
}
