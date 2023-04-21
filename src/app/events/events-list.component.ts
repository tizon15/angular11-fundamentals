import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared';
import { EventService } from './shared/event.service';
@Component({
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events:IEvent[];
  constructor(private eventService: EventService,/*  private toastrService: ToastrService, */ private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe(events => { this.events = events});
    this.events = this.route.snapshot.data['events'];
  }
 /*  handleThumbnailClick(eventName){
    this.toastrService.success(eventName)
  } */
}
