import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe-model/recipe-model.component';
import { RecipeService } from '../recipe-service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetail: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private activeroute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    this.activeroute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeDetail = this.recipeService.getRecipeWithIndex(this.id);
    });
  }

  addingToShoppingList() {
    this.recipeService.addingToShoppingList(this.recipeDetail.ingredients);
  }

  onEditRecipe() {
    this.route.navigate(['edit'], { relativeTo: this.activeroute });
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }

}
