import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CourseService } from './services/course.service';

import { routes } from './app.route';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPipe } from './filter/search.pipe';
import { AddcourseComponent } from './addcourse/addcourse.component';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    NavbarComponent,
    SearchPipe,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MatExpansionModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
