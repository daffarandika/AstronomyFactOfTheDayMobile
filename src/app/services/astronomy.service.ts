import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, } from 'rxjs/operators';
import { Fact } from 'src/data/fact';
import { environment } from 'src/environments/environment';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AstronomyService {

  constructor(private http: HttpClient) { }

  baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${environment.apiKey}`

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) { 
      return throwError(() => new Error("Please check your internet connection"))
    } else {
      return throwError(() => new Error("Something went wrong"))
    }
  }

  getRandomFacts() : Promise<Fact[]>{
    const options = {
      url: `${this.baseUrl}&count=2`,
      method: 'GET',
    } as HttpOptions;
    return CapacitorHttp.get(options).then((val) => {
      return val.data as Fact[]
    });
  }

  getFactByDate(date: string): Promise<Fact> {
    const options = {
      url: `${this.baseUrl}&date=${date}`,
      method: 'GET',
    } as HttpOptions;
    return CapacitorHttp.get(options).then((val) => {
      return val.data as Fact
    });
  }

  getTodaysFact(): Promise<Fact> {
    const options = {
      url: `${this.baseUrl}`,
      method: 'GET',
    } as HttpOptions;
    return CapacitorHttp.get(options).then((val) => {
      return val.data as Fact
    });
  }

}
