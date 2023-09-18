import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{

  categories:any;

  constructor(private categoryService:CategoryService,private snack:MatSnackBar){}

  ngOnInit(): void {
this.categoryService.getCategory().subscribe((data)=>{

  this.categories=data;

  console.log(this.categories)


},(error)=>{

  this.snack.open("error in loading category","",{

    duration:3000
  })

})
   
  }




}
