//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { timeStamp } from 'console';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  //templateUrl: './course.component.html',
  //styleUrls: ['./course.component.css']
  template:`
  <h2>{{ getTitle() }}</h2>
  <ul>
    <li *ngFor="let course of courses">
    {{ course }}
    </li>
  </ul>
  `
})

//export class CourseComponent implements OnInit {

export class CourseComponent {  
  
  title = "List of courses";
  courses;

  constructor( service: CoursesService ) { 
    this.courses = service.getCourses();
  }

  getTitle(){
    return this.title;
  }

  //ngOnInit(): void {}


}
