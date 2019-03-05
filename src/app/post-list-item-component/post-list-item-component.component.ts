import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  loveIts: number = 0;
  createdAt: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
