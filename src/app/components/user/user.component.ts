import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

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

  // array

  private skills:string[];

  constructor() { }

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
