import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientModel } from 'src/app/shared/ingredient-model';
import { ShoppinListService } from '../shopping-service/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputField: ElementRef;

  @ViewChild("amountInput") amountInputField: ElementRef;

  constructor(private shoppingService: ShoppinListService) { }

  ngOnInit(): void {
  }

  addingIngredient() {
    if (this.nameInputField.nativeElement.value !== "" && this.amountInputField.nativeElement.value !== "") {
      this.shoppingService.addIngredient(new IngredientModel(
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
    this.shoppingService.deleteIngredient();
  }
}
