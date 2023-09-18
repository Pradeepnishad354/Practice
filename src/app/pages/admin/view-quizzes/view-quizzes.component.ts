import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any=[];
  constructor(private quizService:QuizService){}
  ngOnInit(): void {
    
    this.quizService.quizzes().subscribe((data:any)=>{
     this.quizzes=data;
      console.log(this.quizzes);


    },(error)=>{
console.log(error);
Swal.fire("Error!","Error loading data","error")

    })


  }

//   quizzes=[{
// "qId":23,
// "title":"Basic java Quiz",
// "description":"java Quiz",
// "maxMarks":"50",
// "numberOfQuestions":"20",
// "active":'',
// category:{
// "title":"   programming"

// }


//   }]



public deleteQuiz(qId:any){

Swal.fire({
  icon:'info',
   title:'Are you sure ?',
   confirmButtonText:'Delete',
   showCancelButton:true,

}).then((result)=>{

  if(result.isConfirmed){

    //delete
    
    this.quizService.deleteQuizzes(qId).subscribe((data)=>{

      this.quizzes=this.quizzes.filter((quiz:any  )=>quiz.qId !=qId);
      Swal.fire("Success","quiz delete successfully",'success')
    },(error)=>{
  
  
      Swal.fire("Error","error in deleting quiz",'error')
    })

  }
})





  

}
  
}
