import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-template-form-example',
  templateUrl: './template-form-example.component.html',
  styleUrls: ['./template-form-example.component.css']
})
export class TemplateFormExampleComponent implements OnInit 
{

  public hobbies: string[] = ['Cine','Series','Leer','Deporte','Viajar'];

  public user= new User();

  constructor() 
  { 
    this.user 
  }

  onSubmit(form) {
    console.log(form.value)
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
