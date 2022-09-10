import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientModel } from 'src/app/shared/ingredient-model';
import { ShoppinListService } from '../shopping-service/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shoppingService: ShoppinListService) { }

  ngOnInit(): void {
  }

  addingIngredient(form: NgForm) {
    const values = form.value;
    if (values.name !== "" && values.amount !== "") {
      this.shoppingService.addIngredient(new IngredientModel(
        values.name,
        values.amount,
      ));
    }
    // this.clearIngredient();
  }
  // clearIngredient() {
  //   this.nameInputField.nativeElement.value = "";
  //   this.amountInputField.nativeElement.value = "";
  // }

  deletingIngredient() {
    this.shoppingService.deleteIngredient();
  }
}
