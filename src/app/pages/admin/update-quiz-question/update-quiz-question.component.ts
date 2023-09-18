import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-quiz-question',
  templateUrl: './update-quiz-question.component.html',
  styleUrls: ['./update-quiz-question.component.css']
})
export class UpdateQuizQuestionComponent  implements OnInit{
  public Editor=ClassicEditor


  qId:any;
  question:any;
  //content:any
  qTitle:any;
  constructor(private route:ActivatedRoute,
    private questionService:QuestionService,
    private router:Router){}

  ngOnInit(): void {
    
this.qId=this.route.snapshot.params['qid'];
this.qTitle=this.route.snapshot.params['title']
    
console.log("update questions ----"+this.qId)


this.questionService.getQuestions(this.qId).subscribe((data)=>{

console.log(data)
this.question=data;
})

  }


// update questions 
  public updateSubmit(){

    this.questionService.updateQuestions(this.question).subscribe((data)=>{

     Swal.fire("Success","Updated questions successfully","success").then(e=>{

      this.router.navigate(['view-questions/:qid/:title'])
    


  })


},(error)=>{

  Swal.fire("Error","error in updating questions ","error");
})
  }
}