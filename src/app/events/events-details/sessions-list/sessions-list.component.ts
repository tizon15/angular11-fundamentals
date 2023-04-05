import { Component, Input, OnInit } from '@angular/core';
import { ISessions } from '../../shared';

@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html',
  styles: [],
})
export class SessionsListComponent implements OnInit {
    @Input() sessions: ISessions[];
  constructor() {}
  ngOnInit(): void {}
}
