import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { routes, components } from './home.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  declarations: [
    ...components
  ]
})
export class HomeModule {}
