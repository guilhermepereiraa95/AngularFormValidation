import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})

export class DataDrivenFormComponent implements OnInit {

  form: FormGroup = this.formbuilder.group({
    nome: this.formbuilder.control,
    email: this.formbuilder.control
  });
  
  
  constructor(private formbuilder: FormBuilder) { 
   
  }

  onSubmit(form: Form) {
    console.log(this.form);
  }

  ngOnInit(): void {
    

  }

}
