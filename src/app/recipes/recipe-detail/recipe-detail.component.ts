import { Component, Input, OnInit } from '@angular/core';
import { IngredientModel } from 'src/app/shared/ingredient-model';
import { Recipe } from '../recipe-model/recipe-model.component';
import { RecipeService } from '../recipe-service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input("details") recipeDetail: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addingToShoppingList() {
    this.recipeService.addingToShoppingList(this.recipeDetail.ingredients);
  }

}
