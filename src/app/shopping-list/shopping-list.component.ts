import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel("Apples", 100),
    new IngredientModel("Vineger", 150),
    new IngredientModel("Red Chillt", 50),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

  deleteIngredient() {
    if (this.ingredients !== [] && this.ingredients !== undefined) { }
    this.ingredients.pop();
  }
}
