import { Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { JournalComponent } from './journal';
import { ActivitiesComponent } from './activities';
import { IncentivesComponent } from './incentives';

// Global style import
import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'my-behavioral-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES, AlertComponent, DATEPICKER_DIRECTIVES],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/Journal', component: JournalComponent, name: 'Journal'},
  {path: '/Activities', component: ActivitiesComponent, name: 'Activities'},
  {path: '/Incentives', component: IncentivesComponent, name: 'Incentives'}
])
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  messageActions = 'No actions';
  date: Date = new Date();

  constructor(private api: ApiService, public router: Router) {
  }


  onJournalEntry() {
    console.log('Journal Entry Button Clicked');
    this.messageActions = 'Journal Entry Button Clicked';
  }

  onCallCoach() {
    console.log('Call Coach Entry Button Clicked');
    this.messageActions = 'Call Coach Button Clicked';
  }

  onDailyActivity() {
    console.log('Daily Activity Button Clicked');
    this.messageActions = 'Daily Activity Button Clicked';
  }

}
