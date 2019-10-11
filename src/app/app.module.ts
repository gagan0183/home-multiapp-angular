import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatExpansionModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterModule } from '@angular/router';
import { routes } from './app.route';

import { CourseService } from './services/course.service';
import { LoaderService } from './services/loader.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseComponent } from './courses/course/course.component';
import { SearchPipe } from './filter/search.pipe';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { DialogComponent } from './dialog/dialog.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';

@NgModule({
  exports: [
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatNativeDateModule
  ]
})
export class MaterialModule {}

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    DropdownModule,
    SidebarModule,
    ToggleButtonModule,
    CalendarModule,
    ProgressSpinnerModule
  ]
})
export class PrimeModule {}

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    NavbarComponent,
    SearchPipe,
    ProgressSpinnerComponent,
    DialogComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    PrimeModule
  ],
  entryComponents: [DialogComponent],
  providers: [CourseService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
