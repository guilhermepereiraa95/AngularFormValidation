import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any ={
    name: null,
    email: null,
    cep: null,
    num: null,
    complemento: null,
    endereco: null,
    cidade: null,
    estado: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: Form): void {
    console.log(form);
    //console.log(this.usuario);
  }

  validaCampo(campo: any){
      return campo.valid && campo.touched;
  }

  verificaCampo(campo: any){
    if(this.validaCampo(campo)){
      return 'is-valid';
    }else {
      return 'is-invalid';
    }
  }

}
