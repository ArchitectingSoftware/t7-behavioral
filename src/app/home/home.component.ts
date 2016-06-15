import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router-deprecated';

import {MessagesComponent} from '../messages';
import {AlarmComponent} from '../alarmclock';

@Component({
  selector: 'my-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')],
  directives: [MessagesComponent, AlarmComponent]
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) {
    // Do stuff
    console.log('ROUTER DEBUG', router, this.router.isRouteActive(this.router.generate(['Home'])));
  }

  ngOnInit() {
    console.log('Hello Home');

  }



}
