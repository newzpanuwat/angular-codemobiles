import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TodoService {

  constructor(private http:Http) { }


  getTodoList(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos").map((res)=> res.json());
  }
}
