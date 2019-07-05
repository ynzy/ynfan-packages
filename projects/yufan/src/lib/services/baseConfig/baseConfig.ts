import { InjectionToken } from '@angular/core';

export interface BaseConfig {
  dataUrl: string;
}

export const BaseConfigService = new InjectionToken<BaseConfig>(
  "TestLibConfig"
);