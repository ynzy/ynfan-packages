import { NgModule } from '@angular/core';
import { YufanComponent } from './yufan.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [YufanComponent, HeaderComponent],
  imports: [
  ],
  exports: [YufanComponent,HeaderComponent]
})
export class YufanModule { }
