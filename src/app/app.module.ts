import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YufanModule } from "yufan";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetdataComponent } from './getdata/getdata.component';

@NgModule({
  declarations: [
    AppComponent,
    GetdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YufanModule.forRoot({
      dataUrl: `https://jsonplaceholder.typicode.com/todos/1`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
