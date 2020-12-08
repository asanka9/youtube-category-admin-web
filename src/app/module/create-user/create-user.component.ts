import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  youtubeList = [1,2,3,34,4]

  constructor() { }

  ngOnInit(): void {
  }

  onBookChange(event){
    alert(event.value);

  }

}
