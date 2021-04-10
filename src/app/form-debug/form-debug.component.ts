import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() formdata: any;
  constructor() { }


  verificaCampo(bool: boolean){
    if (bool){ return 'text-success';} else {return 'text-danger';}
  }


  ngOnInit(): void {
    
  }

}
