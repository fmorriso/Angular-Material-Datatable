import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//
import { MaterialVersionInformationService } from './service/material-version-information.service';
import { AngularVersionInformationService } from './service/angular-version-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links = [];
  constructor(
    private ngVersionService: AngularVersionInformationService,
    private matVersionService: MaterialVersionInformationService,
    private router: Router
  ) {}

  ngOnInit() {
    // build the navigation links using the Angular route config that was built from routes.ts
    // and dependency-injected into this component, which effectively shares that route information without
    // having to define a separate Angular service component.
    for (const route of this.router.config) {
      // we only care about the ones that have a data.label since the others are not going to be rendered in our navigation area
      if (route.data && route.data.label) {
        const link = {
          path: `/${route.path}`,
          label: route.data.label
        };
        this.links.push(link);
      }
    }
    console.log(JSON.stringify(this.links));
  }

  public get angularVersion(): string {
    return this.ngVersionService.versionFull;
  }

  public get materialVersion(): string {
    return this.matVersionService.versionFull;
  }
}
