import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatTableDataSource,MatPaginatorModule,MatSortModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './routes';
import { HttpModule }    from '@angular/http';
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
    HttpModule,
    routing,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatPaginatorModule,MatSortModule
  ],
  exports:[
    MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatPaginatorModule,MatSortModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
