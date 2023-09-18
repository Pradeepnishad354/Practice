import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qId=0;

  quiz:any;

  categories:any;
  // use route as a service to fetch the data
  constructor(private route:ActivatedRoute,
    private quizService:QuizService
    ,private categoryService:CategoryService,
    private snack:MatSnackBar,
    private router:Router){}

  ngOnInit(): void {

  this.qId=  this.route.snapshot.params['qid'];


this.quizService.getQuiz(this.qId).subscribe((data)=>{

  this.quiz=data;
  console.log(this.quiz)
},(error)=>{

  console.log(error);
})  


this.categoryService.getCategory().subscribe((data)=>{

  this.categories=data;

},(error)=>{
  alert("error in loading categories")
})

  }



  // update data

  public updateData(){

if(this.quiz.title==null||this.quiz.title==""){

this.snack.open("title is required field","",{
  duration:3000
})
}

   this.quizService.updateQuiz(this.quiz).subscribe((data)=>{

Swal.fire("Success!!","updated data successfully","success").then(e=>{

  this.router.navigate(["/admin/quizzes"])


})
    
   },(error)=>{

Swal.fire("Error!!","error in updated quiz","error")
   })

  }

}
