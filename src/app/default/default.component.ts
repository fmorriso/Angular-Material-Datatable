import { Component, OnInit } from '@angular/core';
//
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  MyDataSource: any;
  displayedColumns = ['id', 'userId', 'title', 'body'];

  constructor(
    public dataService: DataServiceService
  ) {}

  ngOnInit() {
    this.RenderDataTable();
  }

  RenderDataTable() {
    this.dataService.GetAllRecords().subscribe(
      res => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = res;
        console.log(this.MyDataSource.data);
      },
      error => {
        console.log('There was an error while retrieving Posts !!!' + error);
      }
    );
  }


}
