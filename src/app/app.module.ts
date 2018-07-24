import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { HttpModule } from '@angular/http';
import { CourseService } from './services/course.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatExpansionModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
