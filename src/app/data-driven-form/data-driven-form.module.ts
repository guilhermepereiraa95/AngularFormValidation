import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenFormComponent } from './data-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DataDrivenFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class DataDrivenFormModule { }
