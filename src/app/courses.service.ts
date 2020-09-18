import { Injectable } from '@angular/core';

// auto iject in global without declare in app.module.ts. New in Angular9. 
@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor() { }

  getCourses() {
    return ['course1', 'course3', 'course3'];
  }

  getAuthors(){
    return ['author1', 'author2', 'author3'];
  }
}
