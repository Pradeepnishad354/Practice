
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent  implements OnInit{
  categories:any= []
  category: any;
 // cId:any;
  categoryId:any;
  constructor(private categoryService:CategoryService,
    private route:ActivatedRoute,
    private snack:MatSnackBar){}
  
    
  
  ngOnInit(): void {

    // delete 
  // this.cId=this.route.snapshot.params['cid'];
  // this.categoryService.getCategoryById(this.cId).subscribe((data)=>{

  //   this.cId=data;
  //   console.log("category id "+this.cId)
  // })
 
   this.categoryService.getCategory().subscribe((data:any[ ])=>{
     this.categories=data;
   console.log(this.categories)

    },(error)=>{

      console.log(error)
      Swal.fire("Error!","Error in loading data","error")
    })
    
  }


  // categories=[{
  //   cid:23,
  //   title:'programming',  
  //   description:'this is teting category'
  // },
  // {
  //   cid:24,
  //   title:'programming',
  //   description:'this is teting category'
  // }
  // ,
  // {
  //   cid:25,
  //   title:'programming',
  //   description:'this is teting category'
  // }



  // ]


  // delete category


deleteCategory(cid:any){
console.log("category  deleted")

  // alert(qId)
 
 Swal.fire({
 icon  :"info",
 showCancelButton:true,
 confirmButtonText:'Delete',
 title:'Are you sure ,want to delete?'
 
 }).then((result)=>{
 
   if(result.isConfirmed){
 
     this.categoryService.deleteCategoryy(cid).subscribe((data)=>{
 
       this.snack.open('category deleted','',{
 
         duration:3000
       });
     
     this.categories=this.categories.filter((c:any)=>c.cid != cid);
 
     },(error)=>{
       this.snack.open("Error in deleting question ","",{
       
         duration:3000
       })
    
    
 
   })
  }


})

  }


}