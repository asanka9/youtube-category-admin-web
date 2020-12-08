import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.scss']
})
export class CreateItemsComponent implements OnInit {

  youtubeList = [1,2,3,34,4]

  constructor() { }

  ngOnInit(): void {
  }

  onBookChange(event){
    alert(event.value);

  }

}

