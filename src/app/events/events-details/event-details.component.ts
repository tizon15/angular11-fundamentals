import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    /* this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    }); */
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });

    /* this.event = this.eventService.getEvent(+this.route.snapshot.params['id']); */
  }
  addSession() {
    this.addMode = true;
  }

  
  savedNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }
  cancelAddSession() {
    this.addMode = false;
  }
}
