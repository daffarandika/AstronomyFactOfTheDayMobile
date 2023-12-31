import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  message: string = "";

  set(message: string) {
    this.message = message;
  }

  clear(){
    this.message = "";
  }
}
