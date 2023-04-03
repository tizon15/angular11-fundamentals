import { CreateEventComponent } from './app/events/creation/create-event/create-event.component';
import { EventDetailsComponent } from './app/events/events-details/event-details.component';
import { EventsListComponent } from './app/events/events-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },

  { path: '', redirectTo: '/events', pathMatch: 'full'}
];
