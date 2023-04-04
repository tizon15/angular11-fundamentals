import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;

  // Method for the ngClass
  getStartTimeClass() {
    /* const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green:isEarlyStart, bold: isEarlyStart} */ // return of a object

    /* if (this.event && this.event.time === '8:00 am') return 'green bold';
    return ''; */ // return of a string

    if (this.event && this.event.time === '8:00 am') return ['green', 'bold'];
    return []; // return of a method
  }
  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am')
      return { color: '#003300', 'font-weight': 'bold' };
    return {};
  }
}
