import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from '../service/data-service.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-withsorting',
  templateUrl: './withsorting.component.html',
  styleUrls: ['./withsorting.component.css']
})
export class WithsortingComponent implements OnInit {

  MyDataSource: any;
  displayedColumns = ['id', 'userId','title'];
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:false}) sort: MatSort;

  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.RenderDataTable();
  }

  RenderDataTable() {
    this.dataService.GetAllAlbums()
      .subscribe(
      res => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = res;
        this.MyDataSource.sort = this.sort;
        this.MyDataSource.paginator = this.paginator;
        console.log(this.MyDataSource.data);
      },
      error => {
        console.log('There was an error while retrieving Albums !!!' + error);
      });
  }

}
