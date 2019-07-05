import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { YufanComponent } from './yufan.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseConfig,BaseConfigService } from "./services/baseConfig/baseConfig";
import { ModuleWithProviders } from '@angular/compiler/src/core';
@NgModule({
  declarations: [YufanComponent, HeaderComponent],
  imports: [
    HttpClientModule
  ],
  exports: [YufanComponent,HeaderComponent]
})
export class YufanModule {
  static forRoot(config: BaseConfig):ModuleWithProviders {
    return {
      ngModule: YufanModule,
      providers: [
        {
          provide: BaseConfigService,
          useValue: config
        }
      ]
    }
  }
}
