import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './routes';
//import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WithpaginationComponent } from './withpagination/withpagination.component';
import { WithfilteringComponent } from './withfiltering/withfiltering.component';
import { WithsortingComponent } from './withsorting/withsorting.component';
import { CombinedComponent } from './combined/combined.component';
import { DefaultComponent } from './default/default.component';
import { DataServiceService } from './service/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WithpaginationComponent,
    WithfilteringComponent,
    WithsortingComponent,
    CombinedComponent,
    DefaultComponent
  ],
  imports: [
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
