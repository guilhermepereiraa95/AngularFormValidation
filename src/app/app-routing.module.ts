import { TemplateFormComponent } from './template-form/template-form.component';
import { DataDrivenFormComponent } from './data-driven-form/data-driven-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'dataform', component: DataDrivenFormComponent},
  {path: 'templateform', component: TemplateFormComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
