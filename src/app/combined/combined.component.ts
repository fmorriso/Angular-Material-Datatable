import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { DataServiceService } from '../service/data-service.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.css']
})
export class CombinedComponent implements OnInit {

  MyDataSource: any;
  displayedColumns = ['id', 'userId','title','completed'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.RenderDataTable();
  }

  RenderDataTable() {
    this.dataService.GetAllTodos()
      .subscribe(
      res => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = res;
        this.MyDataSource.sort = this.sort;
        this.MyDataSource.paginator = this.paginator;
        console.log(this.MyDataSource.data);
      },
      error => {
        console.log('There was an error while retrieving Todos !!!' + error);
      });
  }

  Filter(searchstring:string)
  {
    searchstring = searchstring.trim(); 
    searchstring = searchstring.toLowerCase();
    this.MyDataSource.filter = searchstring;
  }

}
