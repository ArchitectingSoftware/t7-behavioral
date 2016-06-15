import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router-deprecated';

@Component({
  selector: 'my-incentives',
  template: require('./incentives.component.html'),
  styles: [require('./incentives.component.scss')]
})
export class IncentivesComponent implements OnInit {

  constructor(public router: Router) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Incentives');
  }

}
