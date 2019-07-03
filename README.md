# Angular Datatable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1 and then upgraded to Angular-CLI 8.
## Changes to Original author's code
* Added `development` configuration in `angular.json`
* Created separate `ng build` and `ng serve` commands within `package.json` with corresponding `--configuration=development` or `--configuration=production` to allow distinct development vs production build/serve capabilities.
* Added `ExtraOptions` with `enableTracing: true` to `routes.ts` and passed it as an additional paramter to the invoke of `forRoot()`.
* Added `, data: {label: 'something'}` to each route to provide a label for each route that is used later to generate a routable dropdown listbox.
* Upgraded RxJS to full RxJS 6+ API by removing dependency on `RxJS-compat` via `rxjs-tslint`.
* Replaced button-type dropdown list with a Material `mat-select` that uses `<ng-template>` and additional `data: {label: 'something'}` option on each route to generate `<a>` tag for each selectable table type.
## Significant 3rd-party software used
* Angular Material

## References
* [Angular Material Datatable With Angular 6 - Part One](https://www.c-sharpcorner.com/article/datatable-with-angular-5/)
* [Angular Material Datatable With Angular 6 - Part Two](https://www.c-sharpcorner.com/article/datatable-with-angular-5-part-2/)
* [Migrate RxJS 5 to 6](https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/v6/migration.md)
  ```
  npm i -g rxjs-tslint
  rxjs-5-to-6-migrate -p [path/to/tsconfig.json]
  ```
## Problems encountered
### core-js 3.x in polyfills.ts
Error: Can't resolve 'core-js/es7/reflect' in 'C:\projects\Angular-Material-Datatable\src'
   
solution:
Change the following line in `polyfills.ts` from: 
```typescript
import 'core-js/es7/reflect';
```
to
```typescript
import 'core-js/proposals/reflect-metadata';
```

