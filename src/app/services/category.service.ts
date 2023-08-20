import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cadegory} from '../category/cadegory'
import { Observable, catchError, tap,throwError } from 'rxjs';


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path ="http://localhost:3000/categories"
  getCategories():Observable<Cadegory[]>{
    return this.http.get<Cadegory[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

    
  }
  handleError(err: HttpErrorResponse){
    let errorMessage=''
  
    if (err.error instanceof ErrorEvent)
    {errorMessage='Bir hata oluştu' +err.error.message

    }else{
      errorMessage='Sistemsel bir mesaj'
    }
    return throwError(errorMessage)
  }
}
