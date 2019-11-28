import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //list = {"id":"","title":"","address":""};
  list :any;
  constructor(public service:DataService) { }

  ngOnInit() {
   this.service.select().subscribe((data)=>{
     console.log(data);
     this.list = data;
   })
  }

}
