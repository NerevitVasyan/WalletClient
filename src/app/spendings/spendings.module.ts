import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpendingItemComponent } from './spending-item/spending-item.component';
import { SpendingListComponent } from './spending-list/spending-list.component';
import { AddSpendingComponent } from './add-spending/add-spending.component';



@NgModule({
  declarations: [SpendingItemComponent, SpendingListComponent, AddSpendingComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SpendingListComponent,AddSpendingComponent]
})
export class SpendingsModule { }
