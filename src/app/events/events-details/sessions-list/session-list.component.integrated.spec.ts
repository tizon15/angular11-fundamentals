import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from '../upvote/voter.service';
import { SessionsListComponent } from './sessions-list.component';
import { DurationPipe } from '../../shared';
import { By } from '@angular/platform-browser';

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
      declarations: [SessionsListComponent, DurationPipe],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
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

      expect(element.querySelector('[well-title]').textContent).toContain(
        'Session 1'
      );
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  });
});
