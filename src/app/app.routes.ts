import { HomeComponent } from './home/home.component';
import { WinesComponent } from './wines/wines.component';
import { RouterModule }   from '@angular/router';

const routes = [
  {path: '', component:HomeComponent},
  {path: 'wines', component:WinesComponent}
];
export default RouterModule.forRoot(routes, { enableTracing: true })
