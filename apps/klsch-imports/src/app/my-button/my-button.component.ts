import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'klsch-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  @Input()
  icon;

  constructor() { }

  ngOnInit() {
  }

}
