import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interchangable-btn',
  templateUrl: './interchangable-btn.component.html',
  styleUrls: ['./interchangable-btn.component.scss']
})
export class InterchangableBtnComponent implements OnInit {

  @Input() icon: string;
  @Input() bg: string;

  constructor() { }

  ngOnInit(): void {
    this.icon = '/assets/img/icons/' + this.icon + '.svg';
    this.bg = '/assets/img/btn-bgs/' + this.bg + '.svg';
  }

}
