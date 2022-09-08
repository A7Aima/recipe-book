import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IngredientModel } from '../shared/ingredient-model';
import { ShoppinListService } from './shopping-service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[] = [];
  private subscription: Subscription;

  constructor(private shoppingService: ShoppinListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientChange.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
