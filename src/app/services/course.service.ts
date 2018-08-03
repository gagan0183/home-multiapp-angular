import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import Course from '../models/course.model';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class CourseService {

  apiCourseUrl: string = environment.url + "/api/course";

  constructor(private http: Http) { }

  getCourses(): Observable<Course[]> {
    console.log(this.apiCourseUrl);
    return this.http.get(this.apiCourseUrl)
          .map(res => {
            console.log(res.json().data.docs);
            return res.json().data.docs.map(item => {
              return new Course(item.title, item.provider, item.category, item.description, item.startDate, item.completeDate, item.link, item.status);
            });
          });
  }

  postCourse(course: Course): Observable<any> {
    return this.http.post(this.apiCourseUrl, course);
  }
}
