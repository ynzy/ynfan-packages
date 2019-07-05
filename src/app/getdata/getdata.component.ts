import { Component, OnInit } from '@angular/core';
import { DataService } from "yufan";
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.less']
})
export class GetdataComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(console.log)
  }

}
