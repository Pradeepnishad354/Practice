import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';

  qid:any;
  questions:any;

 markGot=0;
 correctAnswers =0;
 attemted=0;

 isSubmit=false;

 timer:any;


  constructor(private locatSt:LocationStrategy,
    private route:ActivatedRoute,
    private questionService:QuestionService){}
    ngOnInit(): void {
    this.preventBackButton()
    this.qid=this.route.snapshot.params['qid']
    console.log(this.qid)
    this.loadQuestion();
  
  }

  loadQuestion(){
this.questionService.getQuestionsOfQuizForTest(this.qid).subscribe((data)=>{

  console.log(data)
  this.questions=data

this.timer=this.questions.length * 2 * 60

console.log("timer"+this.timer)

 //this.questions.forEach((q:any)=>{

 // q['givenAnswer']='';

 //});

 this.startTimer();

},(error)=>{
  console.log(error)
  Swal.fire("Error","Error in loading of quiz","error")
})


  }

  preventBackButton(){

    history.pushState(null,location.href);

    this.locatSt.onPopState(()=>{

      history.pushState(null,location.href);
      this.locatSt.onPopState(()=>{

        history.pushState(null,location.href);
      })
    })




  }

submitQuiz(){
Swal.fire({

title:'Do you want to submit the quiz ?',
showCancelButton:true,
confirmButtonText:'submit',
denyButtonText:'Do not save',
icon:'info'
}).then((e)=>{

  if(e.isConfirmed){

    this.evalQuiz();

  }
})

}

startTimer(){


let t=  window.setInterval(()=>{


      if(this.timer<=0){


        this.evalQuiz()
        clearInterval(t)
      }else{

        this.timer--;
      }
    },1000)
}


// get time 
getFormattedTime(){

let mm=  Math.floor(this.timer/60)
let ss=this.timer-mm*60;

return `${mm} min:${ss} sec`
}



// with timer 
evalQuiz(){


  // claculation 
// call to server to check questions 
this.questionService.evalQuiz(this.questions).subscribe((data:any)=>{

console.log("evaluate question:::: "+data)
this.markGot=data.markGot;


this.attemted=data.attemted;
this.correctAnswers=data.correctAnswers;
this.isSubmit=true

  

},(error)=>{
console.log(error)

})




  // this.questions.forEach((q:any)=>{
  
  //   if(q.givenAnswer==q.answer){
  
  //     this.correctAnswers++;
  //   let marksSingle=  this.questions[0].quiz.maxMarks/this.questions.length 
  
  //   this.markGot=this.markGot+marksSingle
  //   }
  
  //   // question attemted 
  
  //   if(q.givenAnswer.trim()!=''){
  
  //     this.attemted++;
  //   }
  
  
  // })
  
  // console.log("Correct answer:"+this.correctAnswers)
  // console.log("Marks Got : "+this.markGot)
  // console.log("Attemted Question : "+this.attemted)

}


// print page

printPage(){

  window.print()
}

exportexcel(): void
{
  /* pass here the table id */
  let element = document.getElementById('excel-table');
  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  /* save to file */  
  XLSX.writeFile(wb, this.fileName);

}
}

