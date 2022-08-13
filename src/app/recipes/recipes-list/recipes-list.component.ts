import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe-model/recipe-model.component';
import { RecipeService } from '../recipe-service/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output("selectedRecipeItemFromList") selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];
  constructor(private recipeServics: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeServics.getRecipe();
  }

  onSelectRecipe(select: Recipe) {
    this.selectedRecipe.emit(select);
  }

}
