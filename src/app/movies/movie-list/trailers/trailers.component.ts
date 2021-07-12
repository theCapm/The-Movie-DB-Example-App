import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
})
export class TrailersComponent implements OnInit {
  @Input() trailer_key?: string;
  @Input() trailer_name?: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  public get videoLink() {
    return `https://www.youtube.com/embed/${this.trailer_key}?rel=0`
  }

  open(content) {
    this.modalService.open(content, {size: 'xl', centered: true});
  }
}
