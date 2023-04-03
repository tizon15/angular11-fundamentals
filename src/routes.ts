import { Error404Component } from './app/errors/error404.component';
import { CreateEventComponent } from './app/events/creation/create-event/create-event.component';
import { EventDetailsComponent } from './app/events/events-details/event-details.component';
import { EventRouteActivator } from './app/events/events-details/event-route.activator.service';
import { EventsListComponent } from './app/events/events-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
