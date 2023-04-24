import { Component, DebugElement, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from '../upvote/voter.service';
import { SessionsListComponent } from './sessions-list.component';
import { DurationPipe } from '../../shared';
import { By } from '@angular/platform-browser';
import { CollapseWellComponent } from 'src/app/common';
import { UpvoteComponent } from '../upvote/upvote.component';


describe('SessionListComponent', () => {
  let mockAuthService,
    mockVoterService,
    fixture: ComponentFixture<SessionsListComponent>,
    component: SessionsListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(() => {
    mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Joe' },
    };
    mockVoterService = { userHasVoted: () => true };
    TestBed.configureTestingModule({
      declarations: [
        SessionsListComponent,
        DurationPipe,
        /* CollapseWellComponent,
        UpvoteComponent, */
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SessionsListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });
  describe('initial display', () => {
    it('should have the correct name', () => {
      component.sessions = [
        {
          name: 'Session 1',
          id: 3,
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', ' bob'],
        },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;
      component.ngOnChanges();

      fixture.detectChanges();

      /* expect(element.querySelector('[well-title]').textContent).toContain(
        'Session 1'
      ); */
      expect(
        debugEl.query(By.css('[well-title]')).nativeElement.textContent
      ).toContain('Session 1');
    });
  });
});
