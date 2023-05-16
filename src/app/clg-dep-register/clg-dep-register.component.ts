import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-clg-dep-register',
  templateUrl: './clg-dep-register.component.html',
  styleUrls: ['./clg-dep-register.component.scss']
})
export class ClgDepRegisterComponent implements OnInit {
  collageRegister: FormGroup;
  showPass:string='password';

  //
  constructor(private fb: FormBuilder, private api:ApiService,
    private router : Router,) { }

  //get value from form.
  get name() {
    return this.collageRegister.get('name');
  }
  get mobile() {
    return this.collageRegister.get('mobile');
  }
  get email() {
    return this.collageRegister.get('email');
  }
  get password() {
    return this.collageRegister.get('password');
  }
  get cpassword() {
    return this.collageRegister.get('cpassword');
  }

  ngOnInit() {
    //form group, forncontrol and validation 
    this.collageRegister = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$")]],
      mobile: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern("[0-9]+")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      cpassword: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
    },{ 
      validator: this.password1.bind(this)
    }) 
  }

  //conform password validation
  password1(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('cpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  //registration submit from button
  collegeRegister() {
    console.log("collegeRegister");
    console.log(this.collageRegister.valid);
    if(!this.collageRegister.valid){
      console.log(this.collageRegister.valid);
    }else{
      console.log(this.collageRegister.value);
      this.api.registerCollageOrDepartment(this.collageRegister.value).subscribe((resp)=>{
        console.log("resp",resp);
        this.router.navigate(['./auth/login'])
      })
    }
  }

  showPassword(e){
    if(e.target.checked){
      this.showPass='text';
    }else{
      this.showPass='password';
    }
  }

}
