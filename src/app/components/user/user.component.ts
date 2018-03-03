import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;

  // dictionary
  private address:{
    street:string;
    city:string;
    province:string;
    postcode:string;

  };

 private todoList:Todo[];

  // array
  private skills:string[];

  constructor(private todoService:TodoService) {

   }

  ngOnInit() {
    this.name = "Panuwat Swiftlet"
    this.age = 25
    this.email = "panuwat@gmail.com"
    this.address = {
      street: "123/123",
      city: "Bangsue",
      province: "Bangkok",
      postcode: "10120"
    };
    
    this.skills = ["Ruby", "Programming", "Pingpong", "Eating"];

    //Call service
    this.todoService.getTodoList().subscribe((Response)=>{
        this.todoList = Response
    });
      
  }
    
  addSkill(skill){
    this.skills.unshift(skill)
    return false;
  }
  removeSkill(skill){
    this.skills.forEach((element, index) => {
      if (element == skill){
        this.skills.splice(index, 1);
      }
    });
    return false;
  }
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
