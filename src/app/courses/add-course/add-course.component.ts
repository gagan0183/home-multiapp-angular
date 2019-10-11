import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';
import { CourseService } from '../../services/course.service';
import Course from '../../models/course.model';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Input() showSideBar;
  @Output() onHideSidebar = new EventEmitter();
  categories = [];
  statuses = [];
  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private courseService: CourseService
  ) {
    this.categories = [
      { name: 'Technology', code: 'Technology' },
      { name: 'Java', code: 'Java' },
      { name: 'Javascript', code: 'Javascript' },
      { name: 'Python', code: 'Python' },
      { name: 'Angular', code: 'Angular' }
    ];
    this.statuses = [
      { name: 'Complete', code: 'complete' },
      { name: 'In Progress', code: 'in-progress' },
      { name: 'Not Started', code: 'not-started' }
    ];
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      title: ['', Validators.required],
      provider: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      completeDate: [new Date(), Validators.required],
      status: ['', Validators.required],
      link: ['', Validators.required],
      print: [false, Validators.required]
    });
  }

  hide() {
    this.onHideSidebar.emit('hidesidebar');
  }

  addCourse() {
    this.loaderService.display(true);
    const courseData = this.formGroup.value;
    const course = new Course(
      courseData.title,
      courseData.category,
      courseData.provider,
      courseData.description,
      new Date(courseData.startDate),
      new Date(courseData.completeDate),
      courseData.link,
      courseData.status,
      courseData.print
    );
    console.log(course);
    setTimeout(() => {
      this.loaderService.display(false);
    }, 10000);
  }
}
