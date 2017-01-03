import { Page } from 'ui/page';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <StackLayout class="p-20">
      <Button text="Home" [nsRouterLink]="['/']" nsRouterLinkActive="active" [nsRouterLinkActiveOptions]="{ exact: true }" class="link"></Button>
      <Button text="Films" [nsRouterLink]="['/films']" nsRouterLinkActive="active" class="link"></Button>
      <router-outlet></router-outlet>
    </StackLayout>
  `,
  styles: [`
    .active {
      color: red
    }
  `]
})
export class AppComponent {

}
