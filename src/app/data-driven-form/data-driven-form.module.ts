import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenFormComponent } from './data-driven-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormDebugComponent } from '../shared/form-debug/form-debug.component';



@NgModule({
  declarations: [
    DataDrivenFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class TemplateFormModule { }
