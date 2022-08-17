import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { TokenserviceService } from 'src/app/service/tokenservice.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private router: Router, private loginService: UserserviceService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,tokenserviceService : TokenserviceService) { }
  ngOnInit(): void {}

/*
  passwordPattern = "(?=.*[a-z])(?=.*[A-Z]).{8,}";
  captchaKey = "6LebPGAdAAAAANDjO7cQFalTtuU6LFBBDIHxgY9-";
  token!: any;
  email!: any;
  currentUser!: User


  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.params.id;
    const formData = new FormData();
    this.tokenserviceService.getUserFromToken(this.token).subscribe(data => {
      this.email = data.email;
    
      formData.append('email', this.email);
      formData.append('token', this.token);
  
      this.loginService.checkUserPasswordRequestToken(formData).subscribe(data => {
        console.log(data);
  
        if (data == false) {
          this.router.navigate(['login']);
  
        }
  
      })

    })
   

  }

  changePasswordForm = this.formBuilder.group({
    password: ['', [
      Validators.required,
      Validators.pattern(this.passwordPattern)
    ]],
    confirmPassword: ['',
      Validators.required,
    ],

    reCaptcha: ['', Validators.required]

  }, {
    validator: mustMatch('password', "confirmPassword"),

  });

  get f() { return this.changePasswordForm.controls; }



  changePassword() {

    const formDataPassword = new FormData();
    formDataPassword.append('password', this.changePasswordForm.value.password);
    formDataPassword.append('token', this.token);
    this.clientService.changePasswordClient(formDataPassword).subscribe(data => {
      if(data==true)
      this.router.navigate(['login']);
      else
      alert("Password already used Try another one ");

    });
  }*/


}
