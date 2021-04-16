import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs-compat';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})

export class DataDrivenFormComponent implements OnInit {

  form: FormGroup = this.formbuilder.group({
    name: [null],
    email: [null]
  });
  
  
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient
    ) { }

  resetar(){
    this.form.reset();
  }

  onSubmit() {
    console.log(this.form.value);

    this.http.post('https://httpbin.org/post', this.form.value)
    .map(response => response)
    .subscribe(data => {

    console.log(data);
    
    }, (error: Error) => alert('erro'),
    
    );

    this.resetar();
    
  }

  ngOnInit(): void {
    

  }

}
