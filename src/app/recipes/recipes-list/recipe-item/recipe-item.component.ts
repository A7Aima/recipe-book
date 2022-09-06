import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe-model/recipe-model.component';
import { RecipeService } from '../../recipe-service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipe: Recipe;
  @Input('recipeIndex') index: number;
  constructor(private recipeServics: RecipeService) { }

  ngOnInit(): void {
    this.recipe = this.recipeServics.getRecipeWithIndex(this.index);
  }


}
