import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
})
export class TrailersComponent implements OnInit {
  @Input() trailer_key?: string;
  @Input() trailer_name?: string;

  constructor() {}

  ngOnInit(): void {}
}
