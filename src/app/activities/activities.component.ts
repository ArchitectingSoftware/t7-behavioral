import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router-deprecated';

@Component({
  selector: 'my-activities',
  template: require('./activities.component.html'),
  styles: [require('./activities.component.scss')]
})
export class ActivitiesComponent implements OnInit {

  constructor(public router: Router) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Activities');
  }

}
