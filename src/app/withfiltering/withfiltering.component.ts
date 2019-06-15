import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { DataServiceService } from '../service/data-service.service';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-withfiltering',
  templateUrl: './withfiltering.component.html',
  styleUrls: ['./withfiltering.component.css']
})
export class WithfilteringComponent implements OnInit {

  MyDataSource: any;
  displayedColumns = ['id', 'postId','name','email','body'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.RenderDataTable();
  }

  RenderDataTable() {
    this.dataService.GetAllComments()
      .subscribe(
      res => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = res;
        this.MyDataSource.paginator = this.paginator;
        console.log(this.MyDataSource.data);
      },
      error => {
        console.log('There was an error while retrieving Comments !!!' + error);
      });
  }

  Filter(searchstring:string)
  {
    searchstring = searchstring.trim(); 
    searchstring = searchstring.toLowerCase();
    this.MyDataSource.filter = searchstring;
  }


}
