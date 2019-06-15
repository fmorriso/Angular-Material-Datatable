
import {throwError as observableThrowError,  Observable ,  Observer } from 'rxjs';

import {map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  _baseUrl = '';

  // For Using Fake API by Using It's URL
  constructor(private http: HttpClient) {
    this._baseUrl = 'https://jsonplaceholder.typicode.com/';
  }

  // To fill the Datatable for Default Table [Dummy Data]
  public GetAllRecords() {
    return this.http.get(this._baseUrl + 'posts').pipe(
      map((res: Response) => {
        return res; // NOTE: changed res.json() to just res
      }),
      catchError(this.handleError), );
  }

  // To fill the Datatable with Comments [Dummy Data]
  public GetAllComments() {
    return this.http.get(this._baseUrl + 'comments').pipe(
      map((res: Response) => {
        return res;
      }),
      catchError(this.handleError), );
  }

  // To fill the Datatable with Photos [Dummy Data]
  public GetAllPhotos() {
    return this.http.get(this._baseUrl + 'albums/1/photos').pipe(
      map((res: Response) => {
        return res;
      }),
      catchError(this.handleError), );
  }

  // To fill the Datatable with Albums [Dummy Data]
  public GetAllAlbums() {
    return this.http.get(this._baseUrl + 'albums').pipe(
      map((res: Response) => {
        return res;
      }),
      catchError(this.handleError), );
  }

  // To fill the Datatable with Todos [Dummy Data]
  public GetAllTodos() {
    return this.http.get(this._baseUrl + 'todos').pipe(
      map((res: Response) => {
        return res;
      }),
      catchError(this.handleError), );
  }

  // To provide error description - Manav
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return observableThrowError(error.status);
  }
}
