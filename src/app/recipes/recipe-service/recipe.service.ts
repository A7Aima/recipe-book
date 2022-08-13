
import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipe-model/recipe-model.component";

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("A Test Recipe One",
            "This is test recipe One provided description",
            "https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg",
        ),
        new Recipe("A Test Recipe Two",
            "This is test recipe Two provided description",
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/indian-10f0c14.jpg",
        ),
        new Recipe("A Test Recipe Three",
            "This is test recipe Three provided description",
            "https://assets.epicurious.com/photos/58865070d79ae59e2081c12e/1:1/w_1114,h_1114,c_limit/lamb-fry-recipe-12012017.jpg",
        ),
        new Recipe("A Test Recipe Four",
            "This is test recipe Four provided description",
            "https://purewows3.imgix.net/images/articles/2020_03/Indian-grandma-recipes-skillet-lamb-vindaloo.jpg",
        ),
    ];

    getRecipe() {
        return this.recipes.slice();
    }

}