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
import {MatExpansionModule} from '@angular/material/expansion';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPipe } from './filter/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    NavbarComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MatExpansionModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
