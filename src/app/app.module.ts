import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeDe from '@angular/common/locales/de';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { registerLocaleData } from '@angular/common';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

registerLocaleData(localeDe, 'de-DE');

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE',
    }
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
