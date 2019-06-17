import { Component } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialVersionInformationService } from './service/material-version-information.service';
import { AngularVersionInformationService } from './service/angular-version-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private ngVersionService: AngularVersionInformationService,
    private matVersionService: MaterialVersionInformationService
  ) {}
  public get angularVersion(): string {
    return this.ngVersionService.versionFull;
  }

  public get materialVersion(): string {
    return this.matVersionService.versionFull;
  }
}
