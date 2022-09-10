import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IngredientModel } from 'src/app/shared/ingredient-model';
import { ShoppinListService } from '../shopping-service/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IngredientModel;

  constructor(private shoppingService: ShoppinListService) { }

  ngOnDestroy(): void {
    this.subSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subSubscription = this.shoppingService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }

  onSubmitItem(form: NgForm) {
    const values = form.value;
    if (values.name !== "" && values.amount !== "") {
      const newIngredient = new IngredientModel(values.name, values.amount);
      if (this.editMode) {
        this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
      } else {
        this.shoppingService.addIngredient(newIngredient);
      }
      form.reset();
      this.editMode = false;
    }
    // this.clearIngredient();
  }


  clearIngredient() {
    this.slForm.reset();
    this.editMode = false;
  }

  deletingIngredient() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.clearIngredient();
  }
}
