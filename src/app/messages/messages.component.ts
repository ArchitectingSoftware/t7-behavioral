import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-messages',
  template: require('./messages.component.html'),
  styles: [require('./messages.component.scss')]

})
export class MessagesComponent implements OnInit {

  //Hard coded - fix: add to a service and resolve from a web service
  slideContent = [
    `Considering calling your coach to earn additional incentives`,
    'Looks like its time to renew your meds - visit myCigna.com',
    'Have a great day - document in your journal',
    'Complete the daily activity to earn incentives'
  ];

  constructor() {

  }

  isActive(url: string) {
    return url === this.slideContent[0];
  }

  ngOnInit() {
    console.log('Hello Messages');

  }



}

