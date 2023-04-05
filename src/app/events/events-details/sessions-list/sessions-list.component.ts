import { Component, Input, OnInit } from '@angular/core';
import { ISession } from '../../shared';

@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html',
  styles: [],
})
export class SessionsListComponent implements OnInit {
    @Input() sessions: ISession[];
  constructor() {}
  ngOnInit(): void {}
}
