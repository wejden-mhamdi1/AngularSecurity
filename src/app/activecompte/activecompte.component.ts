import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { TokenserviceService } from '../service/tokenservice.service';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-activecompte',
  templateUrl: './activecompte.component.html',
  styleUrls: ['./activecompte.component.scss']
})
export class ActivecompteComponent implements OnInit {

  constructor(private userserivce:UserserviceService,private tokenservice:TokenserviceService,private activatedRoute: ActivatedRoute) { 
    //this.activationToken=this.activatedRoute.snapshot.params.id;

  }
 // activationToken!:any;
  userconnected:string;

  ngOnInit(): void {
/*
    this.loginService.activateAccount(this.activationToken).subscribe(data=>{
      console.log(data);
      if(data)
      {
        this.router.navigate(['login']);
        alert("VERIFIED");   
      }
      else {
        this.router.navigate(['login']);
        alert("Verif your email again")
      }
    })

  }*/



    this.activecommpte()

  }
  user:User;
  data:any;
  username!:string
  currentuser:any=UserserviceService.currentuser

activecommpte(){
  console.log("aaa")
this.userserivce.Activecompte("wejdena").subscribe(res => {
});
console.log("hi wej");
}
getuser() {
  let username;
  this.userserivce.getUser(username)
   
}
}
