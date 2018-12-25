import { Component, OnInit } from '@angular/core';
import {
  faAd,
  faAddressBook,
  faCoffee,
  faUniversalAccess
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'klsch-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  firstIcon = faAd;
  secondIcon = faUniversalAccess;
  rdIcon = faCoffee;
  thIcon = faAddressBook;

  constructor() {}

  ngOnInit() {}
}
