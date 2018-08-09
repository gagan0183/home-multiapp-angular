import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import Course from '../models/course.model';
import { CourseService } from '../services/course.service';
import { LoaderService } from '../services/loader.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  isLinear = true;
  formGroup: FormGroup;
  formArray: FormArray;
  
  constructor(private _formBuilder: FormBuilder, private courseService: CourseService, private loaderService: LoaderService, public dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    this.formArray = this._formBuilder.array([this._formBuilder.group({
      title: ['', Validators.required],
      provider: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    }),
    this._formBuilder.group({
      startDate: [new Date(), Validators.required],
      completeDate: [new Date(), Validators.required],
      status: ['', Validators.required],
      link: ['', Validators.required],
      print: ['', Validators.required]
    })]);
    this.formGroup = this._formBuilder.group({
      formArray: this.formArray
    });
  }

  submit() {
    this.loaderService.display(true);
    var formgroup1 = this.formGroup.value.formArray[0];
    var formgroup2 = this.formGroup.value.formArray[1];
    var course = new Course(formgroup1.title,  
                            formgroup1.category,
                            formgroup1.provider, 
                            formgroup1.description, 
                            new Date(), 
                            new Date(), 
                            formgroup2.link, 
                            formgroup2.status);
    this.courseService.postCourse(course).subscribe((res) => {
      this.loaderService.display(false);
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '360px',
        data: {
          title: "Success",
          message: "Course added successfully"
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        dialogRef.close();
        this.router.navigate(['/course-list']);
      })
    },
    (err) => {
      console.log("err", err);
      this.loaderService.display(false);
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '360px',
        data: {
          title: "Error",
          message: "Error occurred while connecting to API"
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        dialogRef.close();
        this.router.navigate(['/course-add']);
      })
    });
  }
}


