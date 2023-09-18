import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
 
  cId:any;
  category:any

  constructor(private categoryService:CategoryService,
    private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    
    this.cId=this.route.snapshot.params['cid']

   this.categoryService.getCategoryById(this.cId).subscribe((data)=>{

   this.category=data
 })
  }


updateSubmit(){

  this.categoryService.updateCategories(this.category).subscribe((data)=>{

    Swal.fire("Success!!",'update category successfully!!','success').then(e=>{

      this.router.navigate(['/admin/category'])

    })

  },(error)=>{
console.log(error)

  })

}

}
