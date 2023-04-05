import { Error404Component } from './app/errors/error404.component';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventsListResolver,
  EventsListComponent,
  CreateSessionComponent,
} from './app/events/index';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  {
    path: 'events/sessions/new',
    component: CreateSessionComponent,
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  // { path: 'user', loadChildren: './app/user/user.module#UserModule' },
  {
    path: 'user',
    loadChildren: () =>
      import('./app/user/user.module').then((m) => m.UserModule),
  },
];
