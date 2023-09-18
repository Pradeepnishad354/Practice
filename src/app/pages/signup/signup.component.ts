import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  //user:User|any
 
  

  user:User=new User();
constructor(private userService:UserService,
  private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }

  


// user={

//   username:'',
//   password:'',
//   firstName:'',
//   lastName:'',
//   email:'',
//   phone:''

// }


 formSubmit(){
if(this.user.username==""||this.user.username==null){
  Swal.fire("Error!!","please fill all the fields","error")
  this.snack.open("username is required!!","",
  {
duration:3000


  })
  
  return ;
}
if(this.user.email=='' || this.user.email==null||this.user.phone==''||this.user.phone==null||this.user.firstName==''|| this.user.firstName==null||this.user.lastName==''|| this.user.lastName==null||this.user.password==null||this.user.password==null){

  Swal.fire("Error!!","Please fill all the fields!!","error")
  
}


else{

  this.userService.createUser(this.user).subscribe((data)=>{

console.log(data)
Swal.fire("success","user is registred successfully","success")
//Swal.showValidationMessage("registered successfully")
  },error=>{
 this.snack.open("something went to wrong   "," ",{
  
  duration:4000
})

  }


  
 
  )
}

}

  


 
  

  
}
