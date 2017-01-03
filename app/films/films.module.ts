import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NativeScriptModule } from 'nativescript-angular/platform';
import { FilmsComponent } from './films.component';

import filmsRoutes from './films.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    CommonModule,
    filmsRoutes,
  ],
  declarations: [
    FilmsComponent,
  ]
})
export class FilmsModule{}
