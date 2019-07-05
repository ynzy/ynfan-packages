import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data/data.service";
@Component({
  selector: 'zy-yufan',
  template: `
    <p>
      yufan works!
    </p>
  `,
  styles: []
})
export class YufanComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(console.log)
  }

}
