import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }




  // get all questions 

  public  getQuestionsOfQuiz(qid:any){

    return this.http.get(`${baseURL}/question/quiz/all/${qid}`)




  }

  public  getQuestionsOfQuizForTest(qid:any){

    return this.http.get(`${baseURL}/question/quiz/${qid}`)




  }
//  add question  


public addQuestions(question:any){


  return this.http.post(`${baseURL}/question/`,question);
}

//delete question


public deleteQuestions(quesId:any){


  return this.http.delete(`${baseURL}/question/+  ${quesId}`)
}

// eval quiz


public evalQuiz(questions:any){

  return this.http.post(`${baseURL}/question/eval-quiz`,questions)

}


// get single  questions


public getQuestions(quesId:any){

  return this.http.get(`${baseURL}/question/+ ${quesId}`)


}

// update questions

public updateQuestions(question:any){

  return this.http.put(`${baseURL}/question/`,question)
}

}
