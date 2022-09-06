import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient-model';
import { ShoppinListService } from './shopping-service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [];
  constructor(private shoppingService: ShoppinListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientChange.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }
}
