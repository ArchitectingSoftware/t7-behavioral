import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router-deprecated';

@Component({
  selector: 'my-journal',
  template: require('./journal.component.html'),
  styles: [require('./journal.component.scss')]
})
export class JournalComponent implements OnInit {

  constructor(public router: Router) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Journal');
  }

}
