import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MdToolbarModule, 
  MdIconModule, 
  MdButtonModule, 
  MdCardModule, 
  MdInputModule,
  MdListModule,
  MdSlideToggleModule,
  MdGridListModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdMenuModule,
  MdCheckboxModule,
  MdTooltipModule,
  MdRadioModule,
  MdSelectModule,
  MdDatepickerModule,
  MdNativeDateModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdRadioModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdRadioModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  declarations: []
})
export class SharedModule { }
