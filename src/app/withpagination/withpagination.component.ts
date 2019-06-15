import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource , MatPaginator } from '@angular/material';
import { DataServiceService } from '../service/data-service.service';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-withpagination',
  templateUrl: './withpagination.component.html',
  styleUrls: ['./withpagination.component.css']
})
export class WithpaginationComponent implements OnInit {

  MyDataSource: any;
  displayedColumns = ['id', 'albumId','title','url','thumbnailUrl'];

  constructor(public dataService: DataServiceService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.RenderDataTable();
  }

  RenderDataTable() {
    this.dataService.GetAllPhotos()
      .subscribe(
      res => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = res;
        this.MyDataSource.paginator = this.paginator;
        console.log(this.MyDataSource.data);
      },
      error => {
        console.log('There was an error while retrieving Photos !!!' + error);
      });
  }
}
