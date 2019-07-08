import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title:string;
  @Output() private left = new EventEmitter()
  @Output() private right = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  handleLeft() {
    // console.log('我是左边的方法')
    this.left.emit('左边的方法发送出去')
  }
  handleRight() {
    // console.log('我是右边的方法')
    this.right.emit('右边的方法发送出去')

  }
}
