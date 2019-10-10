import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  @Input() showSideBar;
  @Output() onHideSidebar = new EventEmitter();

  hide() {
    this.onHideSidebar.emit('hidesidebar');
  }
}
