import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { CollapseWellComponent, JQ_TOKEN, ModalTriggerDirective, SimpleModalComponent, TOASTR_TOKEN, Toastr } from './common/index';
/* import { ToastrService } from './common/toastr.service'; */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Error404Component } from './errors/error404.component';
import { EventsAppComponent } from './events-app.component';
import {
  CreateEventComponent,
  CreateSessionComponent,
  DurationPipe,
  EventDetailsComponent,
  EventRouteActivator,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  EventsListResolver,
  SessionsListComponent,
} from './events/index';
import { NavBarComponent } from './nav/navbar.component';
import { AuthService } from './user/auth.service';
registerLocaleData(localeDe, 'de-DE');

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionsListComponent,
    CollapseWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  providers: [
    EventService,
    // ToastrService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    {provide: JQ_TOKEN , useValue: jQuery},
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
    {
      provide: LOCALE_ID,
      useValue: 'de-DE',
    },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty)
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  return true;
}
