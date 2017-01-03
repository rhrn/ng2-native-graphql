import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { routes, components } from './films.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    CommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  declarations: [
    ...components
  ]
})
export class FilmsModule {}
