import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{
  uId=0;
  user:any;

 constructor(private userService:UserService,
  private route:ActivatedRoute,
  private router:Router){}


  ngOnInit(): void {

 this.uId= this.route.snapshot.params['id']

 //console.log(this.uId)
 this.userService.getUser(this.uId).subscribe((data)=>{

this.user=data;

console.log(this.user)

 },(error)=>{

  console.log("error in fetching user data")
 })
    
  }


  //update profile

  updateForm(){

    this.userService.updateUser(this.user).subscribe((data)=>{

      Swal.fire("Success!!","profile update successfully!!","success").then(e=>{  

        this.router.navigate(["/user/profile"])


    })
  },(error)=>{
  console.log("error in updating user profile")

  })

  

}
}