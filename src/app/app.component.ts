import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoader: boolean;
  showSideBar: boolean = false;
  faPlusCircle = faPlusCircle;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

  addCourse() {
    this.showSideBar = true;
  }

  resetSideBar() {
    this.showSideBar = false;
  }
}
