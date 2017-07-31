import { HomeComponent } from './home/home.component';
import { WinesComponent } from './wines/wines.component';
import { AddWineComponent } from './add-wine/add-wine.component';
import { WineComponent } from './wine/wine.component';

import { RouterModule }   from '@angular/router';

const routes = [
  {path: '', component:HomeComponent},
  {path: 'wines', component:WinesComponent},
  {path: 'add-wine', component:AddWineComponent},
  {path: 'wine/:wine_id', component:WineComponent}
];
export const Routing = RouterModule.forRoot(routes, { enableTracing: true });
// export default RouterModule.forRoot(routes, { enableTracing: true })
