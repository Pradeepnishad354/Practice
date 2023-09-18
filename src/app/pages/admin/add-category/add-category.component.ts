import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  constructor(private categoryService:CategoryService,private snack:MatSnackBar){}

  ngOnInit(): void {
   
  }

category={

    "title":'',
    "description":''
  }


  public formSubmit(){
if(this.category.title==''|| this.category.description==null){

this.snack.open("title required !!","",{
  duration:3000
}
)
  return ;
}
    this.categoryService.addCategory(this.category).subscribe((data:any)=>{
this.category.title="";
this.category.description="";
     Swal.fire("Success!!","add Category succesfully","success");


    },(error)=>{
console.log(error);
Swal.fire("Error!!","Server error","error")


    })
    
  }


}
