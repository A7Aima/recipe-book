import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe-model/recipe-model.component';
import { RecipeService } from '../recipe-service/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];
  constructor(private recipeServics: RecipeService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeServics.getRecipe();
  }

  onNewRecipe() {
    this.route.navigate(['new'], { relativeTo: this.activeRoute, });
  }

}
