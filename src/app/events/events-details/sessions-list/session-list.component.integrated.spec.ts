import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionsListComponent } from './sessions-list.component';
import { DebugElement } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from '../upvote/voter.service';

describe('SessionListComponent', () => {
  let mockAuthService,
    mockVoterService,
    fixture: ComponentFixture<SessionsListComponent>,
    component: SessionsListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionsListComponent],
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
  describe('initial display', () => {});
});
