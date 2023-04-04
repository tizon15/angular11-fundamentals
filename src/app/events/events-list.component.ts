import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared';
import { EventService } from './shared/event.service';
@Component({
  template: `
    <div>
      <h1>Upcomming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events:IEvent[];
  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe(events => { this.events = events});
    this.events = this.route.snapshot.data['events'];
  }
  handleThumbnailClick(eventName){
    this.toastrService.success(eventName)
  }
}
