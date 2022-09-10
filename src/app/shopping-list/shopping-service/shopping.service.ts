import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { IngredientModel } from "src/app/shared/ingredient-model";

export class ShoppinListService {
    ingredientChange = new Subject<IngredientModel[]>();
    startedEditing = new Subject<number>();
    private ingredients: IngredientModel[] = [
        new IngredientModel("Apples", 100),
        new IngredientModel("Vineger", 150),
        new IngredientModel("Red Chillt", 50),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: IngredientModel) {
        this.ingredients.push(ingredient);
        this.ingredientChange.next(this.ingredients.slice());
    }

    deleteIngredient() {
        if (this.ingredients !== undefined && this.ingredients.length === 0) {

            this.ingredients.pop();
            this.ingredientChange.next(this.ingredients.slice());
        }
    }

    addIngredientList(ingredientList: IngredientModel[]) {
        this.ingredients.push(...ingredientList);
        this.ingredientChange.next(this.ingredients.slice());
    }
}