import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
// import { AppComponent } from './app.component';
import { CombinedComponent } from './combined/combined.component';
import { WithfilteringComponent } from './withfiltering/withfiltering.component';
import { WithpaginationComponent } from './withpagination/withpagination.component';
import { WithsortingComponent } from './withsorting/withsorting.component';
import { DefaultComponent } from './default/default.component';

const routeOptions: ExtraOptions = { enableTracing: true };
const appRoutes: Routes = [
  { path: '', redirectTo: 'Default', pathMatch: 'full' },
  { path: 'Default', component: DefaultComponent, data: { label: 'Default' } },
  { path: 'WithPagination', component: WithpaginationComponent, data: { label: 'With Pagination' }  },
  { path: 'WithFiltering', component: WithfilteringComponent, data: { label: 'With Filtering' }  },
  { path: 'WithSorting', component: WithsortingComponent, data: { label: 'With Sorting' }  },
  { path: 'Combined', component: CombinedComponent, data: { label: 'Combined' }  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes,
  routeOptions
);
