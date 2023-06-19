import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, } from 'rxjs/operators';
import { Fact } from 'src/data/fact';

@Injectable({
  providedIn: 'root'
})
export class AstronomyService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:5000/v1/apod'

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) { 
      return throwError(() => new Error("Please check your internet connection"))
    } else {
      return throwError(() => new Error("Something went wrong"))
    }
  }

  getRandomFacts(): Observable<Fact[]> {
    return this.http.get<Fact[]>(`${this.baseUrl}/?count=2`).pipe(
      catchError(this.handleError)
    )
  }

  getFactByDate(date: string): Observable<Fact> {
    return this.http.get<Fact>(`${this.baseUrl}?date=${date}`).pipe(
      catchError(this.handleError)
    )
  }

  getTodaysFact(): Observable<Fact> {
    return this.http.get<Fact>(this.baseUrl).pipe(
      catchError(this.handleError)
    )
  }

}
