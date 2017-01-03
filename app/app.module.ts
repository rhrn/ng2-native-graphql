import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ApolloModule } from 'angular2-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'https://graphql-swapi.parseapp.com/'
});

const client = new ApolloClient({ networkInterface });

import { AppComponent } from './app.component';
import { routes } from './app.routes'

@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      NativeScriptModule,
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes),
      ApolloModule.withClient(client),
    ],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule { }
