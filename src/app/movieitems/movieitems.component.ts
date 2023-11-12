import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-movieitems',
  templateUrl: './movieitems.component.html',
  styleUrls: ['./movieitems.component.scss']
})
export class MovieitemsComponent implements OnInit{
@Input() items:any;
@Input() media:any;

constructor(){

}
  ngOnInit(): void {
  }

}
