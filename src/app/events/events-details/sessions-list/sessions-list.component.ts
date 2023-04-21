import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../../shared';
import { VoterService } from '../upvote/voter.service';

@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html',
  styles: [],
})
export class SessionsListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;

  visibleSessions: ISession[] = [];

  constructor(public auth: AuthService, private voterService: VoterService) {}
  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
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
  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        this.eventId,
        session,
        this.auth.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        this.eventId,
        session,
        this.auth.currentUser.userName
      );
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }
  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
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
  return s2.voters.length - s1.voters.length;
}
