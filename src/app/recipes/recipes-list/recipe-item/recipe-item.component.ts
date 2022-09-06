import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe-model/recipe-model.component';
import { RecipeService } from '../../recipe-service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input("recipeItem") recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  selectRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
