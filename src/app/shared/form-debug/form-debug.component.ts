import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  verificaCampo(bool: boolean){
    return bool ? 'text-success' : 'text-danger';    
  }


  ngOnInit(): void {
  }

}
