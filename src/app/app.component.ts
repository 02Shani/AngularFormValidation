import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  form: FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder){

  }

  get fullname(){
    return this.form.get('fullname');
  }

  ngOnInit()
  {
     this.form = this.fb.group(
      {
        fullname: ['', Validators.required],
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
 
  onSubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }
}
