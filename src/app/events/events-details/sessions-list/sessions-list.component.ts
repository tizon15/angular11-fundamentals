import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from '../../shared';

@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html',
  styles: [],
})
export class SessionsListComponent implements OnInit, OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(): void {
    if(this.sessions){
      this.filterSessions(this.filterBy);
    }
  }
  filterSessions(filter: string){
     if(filter === 'all'){
      this.visibleSessions = this.sessions.slice(0)
     } else {
      this.visibleSessions = this.sessions.filter(session =>{
        return session.level.toLocaleLowerCase() === filter;
      })
     }
  }
}
