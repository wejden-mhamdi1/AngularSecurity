import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserserviceService } from '../../service/userservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  


  hero = { userName: '', lastName: '',  email: '',password: '',confirmepassword: ''};
  signup!: FormGroup;

  ngOnInit(): void {
    this.signup = new FormGroup({
      userName: new FormControl(this.hero.userName, [
        Validators.required,
        Validators.minLength(5),
      ]), 
      lastName: new FormControl(this.hero.lastName, [
        Validators.required,
        Validators.minLength(5),
      ]), 
    
      email: new FormControl(this.hero.email, [
        Validators.required,
        Validators.minLength(4),
      ]),  
        
      password: new FormControl(this.hero.password, [
        Validators.required,
        Validators.minLength(5),
      ]),  
      confirmepassword: new FormControl(this.hero.confirmepassword, [
        Validators.required,
        Validators.minLength(5),
      ]),  
         
  })
}

  get userName() { return this.signup.get('userName')!; }
  get lastName() { return this.signup.get('lastName')!; }

  get confirmepassword() { return this.signup.get('confirmepassword')!; }
  get password() { return this.signup.get('password')!; }
 
  get email() { return this.signup.get('email')!; }

  
  data:any;
  constructor(private userservice:UserserviceService,private router:Router) { }
  signupMethode(): void {
  
    this.userservice.signup(this.signup.value).subscribe(res => {
      this.data=res; 
    }
    )
    this.router.navigate(['/accueil']);
 
  alert("Bienvenu chez ATB ! Vous êtes inscrit avec succès ")
  
  }
}











