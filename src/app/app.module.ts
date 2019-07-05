import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YufanModule } from "yufan";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YufanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
