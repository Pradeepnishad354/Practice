import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.css']
})
export class ViewQuizQuestionComponent implements OnInit{

  qId:any;
  qTitle:any;

  questions:any=[]

  constructor(private route:ActivatedRoute,
    private questionService:QuestionService,
    private snack:MatSnackBar){}


  ngOnInit(): void {
   this.qId= this.route.snapshot.params['qid'] // urls
   
   this.qTitle=this.route.snapshot.params['title']

   this.questionService.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{

    console.log("questions------"+data)
    this.questions=data;

   // console.log("questions------"+this.questions)

   },(error)=>{

    console.log(error)
   })
   console.log(this.qId)
   console.log(this.qTitle)
  }

  // delete question 

public deleteQuestion(qid:any){

 // alert(qId)

Swal.fire({
icon  :"info",
showCancelButton:true,
confirmButtonText:'Delete',
title:'Are you sure ,want to delete?'

}).then((result)=>{

  if(result.isConfirmed){

    this.questionService.deleteQuestions(qid).subscribe((data)=>{

      this.snack.open('Question deleted','',{

        duration:3000
      });
    
    this.questions=  this.questions.filter((q:any)=>q.questionId != qid);

    },(error)=>{
      this.snack.open("Error in deleting question ","",{
      
        duration:3000
      })
   
   

  })
  


}




 
})



}}
