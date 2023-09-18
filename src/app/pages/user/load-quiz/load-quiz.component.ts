import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId:any;
  quizzes:any;
  constructor(private route:ActivatedRoute,
    private quizService:QuizService,
    private snack:MatSnackBar){}

  ngOnInit(): void {
   
  //  this.catId= this.route.snapshot.params['catId'];

  //  console.log(this.catId)

  this.route.params.subscribe((params)=>{

    this.catId=params['catId'];


   if(this.catId==0){

    console.log("load all the quizzes")
    this.quizService.getActiveQuizzes().subscribe((data)=>{
    
      this.quizzes=data;
      console.log(this.quizzes)
    
    },(error)=>{
      console.log(error)
    Swal.fire("Error!!","Error in loading quiz","error");
    
    })
    
       }else{
    console.log("load specific quiz")
    this.quizService.getActiveQuizzesOfCatgeory(this.catId).subscribe((data:any)=>{

      this.quizzes=data;
      console.log("quizzess load   "+this.quizzes)


    },(error)=>{

      this.snack.open("error in loading quizzess");

    })
    
       }
      })

  }





}
