import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-model-form-example',
  templateUrl: './model-form-example.component.html',
  styleUrls: ['./model-form-example.component.css']
})
export class ModelFormExampleComponent implements OnInit 
{
  public hobbies: string[] = ['Cine','Series','Leer','Deporte','Viajar'];
  public myForm: FormGroup;
  public user: User;

  constructor(private formBuilder: FormBuilder) 
  { 
    this.buildForm();
  }

  public register() 
  {
    this.user = this.myForm.value;
    console.log(this.user);
  }

  private buildForm()
  {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: ["Nombre", Validators.required],
      email: [, [ Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      hobbies:""
    });
  }
  ngOnInit(): void 
  {
  }

}


