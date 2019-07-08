import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'yufan';
  @ViewChild('header',{static:false}) header:any
  @ViewChild('getdata',{static:false}) getdata:any
  handleright(e) {
    console.log('右边')
    console.log(e)
  }
  handleLeft(e) {
    console.log('左边 :');
    console.log(e)
  }
  getsun() {
    console.log(this.header)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    console.log(this.getdata)
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.getsun();
  }
}
