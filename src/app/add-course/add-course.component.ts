import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  @Input() showSideBar;
}
