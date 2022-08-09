import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model/recipe-model.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelected!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(selected: Recipe) {
    this.recipeSelected = selected;;
  }

}
