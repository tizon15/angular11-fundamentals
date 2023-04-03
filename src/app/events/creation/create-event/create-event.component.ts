import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
