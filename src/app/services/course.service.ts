import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import Course from '../models/course.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {

  apiCourseUrl: string = "http://localhost:3000/api/course";

  constructor(private http: Http) { }

  getCourses(): Observable<Course[]> {
    return this.http.get(this.apiCourseUrl)
          .map(res => {
            console.log(res.json().data.docs);
            return res.json().data.docs.map(item => {
              return new Course(item.title, item.provider, item.category, item.description, item.startDate, item.completeDate, item.link, item.status, item.print);
            });
          });
  }

}
