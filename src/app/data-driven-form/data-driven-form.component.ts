import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs-compat';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})

export class DataDrivenFormComponent implements OnInit {

  form: FormGroup = this.formbuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    email: [null, [Validators.required, Validators.email]],
    cep: [null, [Validators.required]],
    bairro: [null, [Validators.required]],
    numero: [null, [Validators.required]],
    complemento: [null,[Validators.required]],
    endereco: [null,[Validators.required]],
    cidade: [null, [Validators.required]],
    estado: [null,[Validators.required]]
  });
  
  
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient
    ) { }

  resetar(){
    this.form.reset();
  }

  onSubmit() {
    console.log(this.form);

    this.http.post('https://httpbin.org/post', this.form.value)
    .map(response => response)
    .subscribe(data => {

    console.log(data);
    
    }, (error: Error) => alert('erro'),
    
    );

    this.resetar();
    
  }

  
  validaCampo(campo: any){
    return campo.valid && campo.dirty;
}

  verificaCampo(campo: any){
    if(this.validaCampo(campo)){
      return 'is-valid';
    } else if (!this.validaCampo(campo)) {
      return 'is-invalid';
    } else { return ''; }
  }


  ngOnInit(): void {  }

}
