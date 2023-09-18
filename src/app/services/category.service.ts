import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  


  // load all category

public getCategory():Observable<any>{

return this.http.get(`${baseURL}/category/`);


}

//get category by id 
public getCategoryById(categoryId:any){

 return this.http.get(`${baseURL}/category/${categoryId}`)
}


//add category


public addCategory(category:any){

return this.http.post(`${baseURL}/category/`,category);


}
  

// delete category 

public deleteCategoryy(categoryId:any){

  return this.http.delete(`${baseURL}/category/${categoryId}`)


}

//update category

public updateCategories(category:any){

  return this.http.put(`${baseURL}/category/`,category);
}

}
