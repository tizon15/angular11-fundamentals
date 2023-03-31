import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcomming Angular Events</h1>
      <hr />
      <event-thumbnail
        [event]="event1"
        (eventClick)="handleEventClicked($event)"
      ></event-thumbnail>
    </div>
  `,
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular connect',
    date: '31/03/2023',
    time: ' 16:42',
    price: 599,
    imageUrl: ' assets/images/angularconnect-shield.png',
    location: {
      address: 'Segundo',
      city: ' Madrid',
      country: 'Spain',
    },
  };

  handleEventClicked(data) {
    console.log('received', data);
    
  }
}
