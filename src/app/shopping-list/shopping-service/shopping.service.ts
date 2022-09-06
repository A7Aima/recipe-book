import { EventEmitter } from "@angular/core";
import { IngredientModel } from "src/app/shared/ingredient-model";

export class ShoppinListService {
    ingredientChange = new EventEmitter<IngredientModel[]>();
    private ingredients: IngredientModel[] = [
        // new IngredientModel("Apples", 100),
        // new IngredientModel("Vineger", 150),
        // new IngredientModel("Red Chillt", 50),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: IngredientModel) {
        this.ingredients.push(ingredient);
        this.ingredientChange.emit(this.ingredients.slice());
    }

    deleteIngredient() {
        if (this.ingredients !== [] && this.ingredients !== undefined) {

            this.ingredients.pop();
            this.ingredientChange.emit(this.ingredients.slice());
        }
    }

    addIngredientList(ingredientList: IngredientModel[]) {
        this.ingredients.push(...ingredientList);
        this.ingredientChange.emit(this.ingredients.slice());
    }
}