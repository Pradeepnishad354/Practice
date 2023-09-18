import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }


  //get quiz
  public quizzes(){

    return this.http.get(`${baseURL}/quiz/`);
  }


  //add quiz

public addQuiz(quiz:any){
return this.http.post(`${baseURL}/quiz/`,quiz)

}

// delete quiz

public deleteQuizzes(qId:any){

  return this.http.delete(`${baseURL}/quiz/${qId}`)
}


// get single quiz

public getQuiz(qId:any){

 return  this.http.get(`${baseURL}/quiz/${qId}`)


}

// update quiz

public updateQuiz(quiz:any){

  return this.http.put(`${baseURL}/quiz/`,quiz)
}


// get quizzes of category 

public getQuizzesOfCategory(cid:any){

 return this.http.get(`${baseURL}/quiz/category/${cid}`)
}


// get active quizzes


public getActiveQuizzes(){

  return this.http.get(`${baseURL}/quiz/active`);
}

// get Active quizzes of category

public getActiveQuizzesOfCatgeory(cid:any){

  return this.http.get(`${baseURL}/quiz/category/active/${cid}`)
}

}
