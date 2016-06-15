import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router-deprecated';


@Component({
  selector: 'my-alarm-clock',
  template: require('./alarm.component.html'),
  styles: [require('./alarm.component.scss')],
})
export class AlarmComponent implements OnInit {

  constructor(public router: Router) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Alarm Home');

  }

  onAddNewAlarm(){
    console.log('New Alarm Requested');
  }



}
