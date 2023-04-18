import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ISession } from '../../shared';

@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html',
  styles: [],
})
export class SessionsListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      console.log(this.sortBy);
      
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }
  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}
function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length
}
