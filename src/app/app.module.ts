import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { ToastrService } from './common/toastr.service';
import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { CreateEventComponent } from './events/creation/create-event/create-event.component';
import { Error404Component } from './errors/error404.component';
import { EventRouteActivator } from './events/events-details/event-route.activator.service';

registerLocaleData(localeDe, 'de-DE');

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: LOCALE_ID,
      useValue: 'de-DE',
    },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
