import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  isLinear = true;
  formGroup: FormGroup;
  formArray: FormArray;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formArray = this._formBuilder.array([this._formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    }),
    this._formBuilder.group({
      startDate: ['', Validators.required],
      completeDate: ['', Validators.required],
      status: ['', Validators.required],
      link: ['', Validators.required]
    })]);
    this.formGroup = this._formBuilder.group({
      formArray: this.formArray
    });
  }

  submit() {
    console.log(this.formGroup.value);
  }
}


