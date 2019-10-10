import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Input() showSideBar;
  @Output() onHideSidebar = new EventEmitter();
  categories: String[] = [];
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.categories = ['Technology', 'Java', 'Javascript', 'Python', 'GCP'];
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      title: ['', Validators.required],
      provider: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  hide() {
    this.onHideSidebar.emit('hidesidebar');
  }
}
