import { RouterModule } from '@angular/router';
import { FilmsComponent } from './films.component';

const routes = [
  { path: '', component: FilmsComponent }
];

export default RouterModule.forChild(routes);
