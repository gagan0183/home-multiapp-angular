import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { HttpModule } from '@angular/http';
import { CourseService } from './services/course.service';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    MatExpansionModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
