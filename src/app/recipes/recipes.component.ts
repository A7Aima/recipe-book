import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model/recipe-model.component';
import { RecipeService } from './recipe-service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {

  recipeSelected!: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.recipeSelected = recipe;
      }
    );
  }


}
