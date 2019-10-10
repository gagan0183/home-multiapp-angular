import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseComponent } from './courses/course/course.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CourseService } from './services/course.service';
import { LoaderService } from './services/loader.service';

import { routes } from './app.route';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPipe } from './filter/search.pipe';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import {
  MatNativeDateModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatFormFieldModule,
  MatFormFieldControl
} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { DialogComponent } from './dialog/dialog.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
    AngularFontAwesomeModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatExpansionModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    MatButtonModule,
    SidebarModule
  ],
  entryComponents: [DialogComponent],
  providers: [CourseService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
