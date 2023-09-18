import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={

    "username":'',
    "password":''
  }

constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){}

  ngOnInit(): void {
   
  }


  formSubmit(){

    console.log("login clicked ")

    if(this.loginData.username.trim() == "" || this.loginData.username== null){
// give the message 

  this.snack.open("Username is required !! ","",{
  duration:3000
});
return;
    }

    if(this.loginData.password.trim() == "" || this.loginData.password == null){
      // give the validation  message 
      
        this.snack.open("password is required !! ","",{
        duration:3000
      });
      return;
          }

// request to server to generate token 

this.login.generateToken(this.loginData).subscribe(
  
(data:any)=>{
console.log("success")
  console.log(data)
//login ...

this.login.loginUser(data.token);
this.login.getCuurentUser().subscribe((user)=>{

  this.login.setUser(user)
  console.log(user)

// redirect : ADMIN: admin-dashboard

if(this.login.getUserRole()=="ADMIN"){

  // redirect through href you can do same thing by router also

 // window.location.href = '/admin'
 this.router.navigate(['admin'])
 this.login.loginStatusSubject.next(true);

}else if(this.login.getUserRole()=="NORMAL"){

//redirect :NORMAL: normal-dashboard
//window.location.href = "/user-dashboard"
this.router.navigate(['user-dashboard/0'])
this.login.loginStatusSubject.next(true);


}else{
  this.login.logout();
 //location.reload();
}




//redirect :NORMAL: normal-dashboard



})


},
(error)=>{
  console.log("error")
  console.log(error)

  this.snack.open("Invalid details !! try again ","" ,{
    duration:3000
  })
}

)

  }


}
