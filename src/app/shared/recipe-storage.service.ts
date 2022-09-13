import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe-model/recipe-model.component';
import { RecipeService } from '../recipes/recipe-service/recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeServics: RecipeService) {}

  _url: string =
    'https://recipe-book-ccd73-default-rtdb.asia-southeast1.firebasedatabase.app/';

  storeRecipes() {
    const recipes = this.recipeServics.getRecipe();
    this.http.put(this._url + 'recipes.json', recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    // const recipes = this.recipeServics.getRecipe();
    return this.http.get<Recipe[]>(this._url + 'recipes.json').pipe(
      map((recipes) => {
        return recipes.map((recipes) => {
          return {
            ...recipes,
            ingredients: recipes.ingredients ? recipes.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeServics.setRecipes(recipes);
      })
    );
    // .subscribe((recipesResp) => {
    //   this.recipeServics.setRecipes(recipesResp);
    // });
  }
}
