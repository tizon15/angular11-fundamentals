import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapse-well',
  templateUrl: './collapse-well.component.html',
  styles: [],
})
export class CollapseWellComponent implements OnInit {
    @Input() title: string;
    visible: boolean = true;
  constructor() {}
  ngOnInit(): void {}
  toggleContent(){
    this.visible = !this.visible;
  }
}
