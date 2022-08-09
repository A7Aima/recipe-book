import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model/recipe-model.component';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input("details") recipeDetail: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
