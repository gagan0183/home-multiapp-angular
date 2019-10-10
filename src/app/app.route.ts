import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'course-list', pathMatch: 'full' },
  { path: 'course-list', component: CourseListComponent }
];
