import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import Course from '../models/course.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoaderService } from './loader.service';

import { environment } from '../../environments/environment';

@Injectable()
export class CourseService {
  apiCourseUrl: string = environment.url + '/api/course';

  constructor(private http: Http, private loaderService: LoaderService) {}

  getCourses(): Observable<Course[]> {
    this.loaderService.display(true);
    return this.http
      .get(this.apiCourseUrl)
      .map(res => {
        console.log('in this', res);
        this.loaderService.display(false);
        return res.json().data.docs.map(item => {
          return new Course(
            item.title,
            item.category,
            item.provider,
            item.description,
            item.startDate,
            item.completeDate,
            item.link,
            item.status,
            item.print
          );
        });
      })
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  postCourse(course: Course): Observable<any> {
    return this.http.post(this.apiCourseUrl, course);
  }
}
