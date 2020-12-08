import { Component, OnInit } from '@angular/core';
import {DataBaseService} from 'src/app/services/data-base.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {


  youtubeList = [1,2,3,34,4]
  appList = []

  appName :string;
  databaseName :string;

  constructor(private database : DataBaseService) { }

  ngOnInit(): void {
     this.database.getAllApps().subscribe(
      res=>  (this.appList = res)
    );
  }

  addApp(){
    this.database.createNewApp(
      {
        'appName':this.appName,
        'databaseName':this.databaseName
      }
    );
  }

  deleteApp(data){
    this.database.deleteApp(data);
  }
}
