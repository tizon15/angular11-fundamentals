import { Component } from '@angular/core';

@Component({
  selector: 'collapse-well',
  templateUrl: './collapse-well.component.html',
  styles: [],
})
export class CollapseWellComponent {
  // @Input() title: string;
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
