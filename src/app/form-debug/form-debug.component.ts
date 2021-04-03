import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() formdata: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
