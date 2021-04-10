import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    name: null,
    email: null,
    cep: null,
    num: null,
    complemento: null,
    endereco: null,
    cidade: null,
    estado: null,
    bairro: null
  }

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    
    console.log(form.value);
    //console.log(this.usuario);
    this.http.post('/form', form.value)
    .map(response => response)
    .subscribe(data => console.log(data));
  }

  validaCampo(campo: any){
      return campo.valid || campo.dirty;
  }

  verificaCampo(campo: any){
    if(this.validaCampo(campo)){
      return 'is-valid';
    }else {
      return 'is-invalid';
    }
  }

  validaCep(cep: any, form: Form){

    cep = cep.target.value.replace(/\D/g, '');
    

    if(cep != ''){

      var validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)){
        this.http.get(`https://viacep.com.br/ws/${cep}/json/`).map(data => (data)).subscribe(
          dados => this.populaDados(dados, form));

      }
    }

  }

  populaDados(dados: any, formulario: any) {
    
    this.resetaDados(dados, formulario);
    
    formulario.form.patchValue({
      
      cep: formulario.value.cep,
      endereco: dados.logradouro,
      num: formulario.value.num,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });


  }

  resetaDados(dados: any, formulario: any) {
    
    formulario.form.patchValue({
      
      endereco: null,
      num: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null
    });


  }


}
