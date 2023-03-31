import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
})
export class EventThumbnailComponent {
  @Input() event: any;
  someProperty: any = 'some value'
  logFoo() {
    console.log('foo');
  }
}
