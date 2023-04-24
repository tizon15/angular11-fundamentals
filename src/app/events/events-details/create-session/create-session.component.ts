import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../../shared';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateSessionComponent implements OnInit {
  @Output() savedNewSession = new EventEmitter();
  @Output() cancelAddSession =new EventEmitter()
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required]);
    this.presenter = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [Validators.required]);
    this.level = new FormControl('', [Validators.required]);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo', 'bar']),
    ]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValue) {
    const session: ISession = {
      id: 888,
      name: formValue.name,
      duration: +formValue.duration,
      level: formValue.level,
      presenter: formValue.presenter,
      abstract: formValue.abstract,
      voters: [],
    };
    this.savedNewSession.emit(session);
  }
  cancel() {
    this.cancelAddSession.emit();
  }
}
