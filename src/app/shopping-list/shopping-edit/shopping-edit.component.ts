import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientModel } from 'src/app/shared/ingredient-model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor() { }

  @ViewChild("nameInput") nameInputField: ElementRef;

  @ViewChild("amountInput") amountInputField: ElementRef;

  @Output("addIngredientEmit") emitIngredients: EventEmitter<IngredientModel> = new EventEmitter<IngredientModel>();
  @Output("deleteIngredientEmit") deleteIngredient: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  addingIngredient() {
    if (this.nameInputField.nativeElement.value !== "" && this.amountInputField.nativeElement.value !== "") {
      this.emitIngredients.emit(new IngredientModel(
        this.nameInputField.nativeElement.value,
        this.amountInputField.nativeElement.value,
      ));
    }
    this.clearIngredient();
  }
  clearIngredient() {
    this.nameInputField.nativeElement.value = "";
    this.amountInputField.nativeElement.value = "";
  }

  deletingIngredient() {
    this.deleteIngredient.emit();
  }
}
