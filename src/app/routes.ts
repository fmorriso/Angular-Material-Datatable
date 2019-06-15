import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CombinedComponent } from './combined/combined.component';
import { WithfilteringComponent } from './withfiltering/withfiltering.component';
import { WithpaginationComponent } from './withpagination/withpagination.component';
import { WithsortingComponent } from './withsorting/withsorting.component';
import { DefaultComponent } from './default/default.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'Default', pathMatch: 'full' },
    { path: 'Default', component: DefaultComponent },
    { path: 'WithPagination', component: WithpaginationComponent },
    { path: 'WithFiltering', component: WithfilteringComponent },
    { path: 'WithSorting', component: WithsortingComponent },
    { path: 'Combined', component: CombinedComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);