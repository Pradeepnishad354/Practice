import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit{

  qid:any;
  quiz:any;
constructor(private route:ActivatedRoute,
  private quizService:QuizService,
  private snack :MatSnackBar,
  private router:Router
  ){}

  ngOnInit(): void {
   this.qid= this.route.snapshot.params['qid']
  
this.quizService.getQuiz(this.qid).subscribe((data)=>{

  this.quiz=data
  console.log(data)
},(error)=>{
this.snack.open(" error in laoding quiz data")

})
  }



  startQuiz(){
Swal.fire({
title:' Do you want to start the quiz ?',

showCancelButton:true,
confirmButtonText:'Start',
denyButtonText:'Do not save',
icon:'info'

}).then((result)=>{
if(result.isConfirmed){
this.router.navigate(['/start/'+this.qid])

}else if(result.isDenied){

  Swal.fire("Changes are not save ","",'info');
}

})

  }

}
